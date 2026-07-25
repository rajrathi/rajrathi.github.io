---
title: 'CycleGAN: cycle-consistency is the key'
date: 2022-05-22
summary: >-
  How CycleGAN learns to translate between two image domains without a single
  matched pair — and why the cycle-consistency loss, not the adversarial loss,
  is what makes it work.
tags: [AI, Deep Learning, Computer Vision]
cover: /img/cyclegan.jpeg
coverAlt: Diagram of a CycleGAN translating between two image domains
---

Most image-to-image translation setups assume you have pairs: this photo and its
segmentation mask, this sketch and its finished drawing. `pix2pix` works
beautifully when you do. The problem is that for a lot of interesting problems
you simply cannot get pairs.

The case I ran into was brain MRI. A T1-weighted scan and a T2-weighted scan show
different tissue contrast, and radiologists often want both. Getting both means
keeping the patient in the scanner for a second acquisition — more time, more
cost, more discomfort. You would like a model that turns one into the other. But
a paired dataset would require the same patient, scanned twice, perfectly
registered, at scale. In practice you have a pile of T1 scans and a pile of T2
scans from different people, and no correspondence between them.

CycleGAN is the answer to exactly that situation.

## The setup

Two domains, `X` and `Y`. Two generators:

- `G: X → Y`
- `F: Y → X`

And two discriminators, `D_Y` which tries to tell real `Y` images from `G(x)`,
and `D_X` which does the same for `X` and `F(y)`.

The adversarial part is standard. `G` is trained to produce images that `D_Y`
accepts as belonging to `Y`:

```python
# Least-squares GAN loss — more stable than the original log-loss formulation,
# and what the CycleGAN paper actually uses.
def generator_adversarial_loss(fake_scores):
    return tf.reduce_mean((fake_scores - 1.0) ** 2)

def discriminator_loss(real_scores, fake_scores):
    real = tf.reduce_mean((real_scores - 1.0) ** 2)
    fake = tf.reduce_mean(fake_scores ** 2)
    return 0.5 * (real + fake)
```

## Why the adversarial loss alone is not enough

Here is the crux. The adversarial loss only asks one thing of `G`: that its
output looks like it came from domain `Y`. It says nothing whatsoever about the
output corresponding to the input.

That constraint is far too loose. `G` could learn to ignore `x` entirely and emit
the same convincing `Y` image every time — it would satisfy the discriminator
perfectly. Or it could permute the mapping arbitrarily: send patient A's T1 to
something that looks like patient B's T2. The discriminator has no way to object,
because the result is a perfectly plausible member of `Y`.

With unpaired data there is no ground-truth target to penalise this with. So you
need a different kind of constraint.

## Cycle-consistency

The insight is to demand that the translation be reversible:

> Translate an image to the other domain and back again, and you should land
> where you started. `F(G(x)) ≈ x`, and `G(F(y)) ≈ y`.

That is it. That is the whole idea, and it is the reason the architecture works.

```python
def cycle_consistency_loss(real_x, cycled_x, real_y, cycled_y, lambda_cyc=10.0):
    forward = tf.reduce_mean(tf.abs(real_x - cycled_x))   # x -> G -> F -> x
    backward = tf.reduce_mean(tf.abs(real_y - cycled_y))  # y -> F -> G -> y
    return lambda_cyc * (forward + backward)
```

An L1 loss, weighted heavily — `λ = 10` in the paper, which tells you how much of
the training signal actually comes from this term rather than the adversarial one.

Think about what this rules out. If `G` collapses to a constant output, `F`
cannot possibly recover the original `x` from it — the information is gone, and
the cycle loss goes through the roof. If `G` scrambles the correspondence between
inputs and outputs, `F` would have to learn the inverse scramble, which is a much
harder function than the identity-preserving one. Cycle-consistency forces the
generators to preserve the content of the image while changing only its style or
modality, because content is precisely the thing that has to survive the round
trip.

It is a soft, self-supervised stand-in for the paired supervision you do not have.

## The identity loss

There is a third term that is easy to skip and worth keeping, particularly for
medical images:

```python
def identity_loss(real_y, same_y, lambda_id=5.0):
    # G(y) should be y: feeding a generator an image already in its target
    # domain should change nothing.
    return lambda_id * tf.reduce_mean(tf.abs(real_y - same_y))
```

Without it, generators tend to shift the overall colour or intensity of the image
even when they have no reason to. In the MRI case that matters — a global
intensity shift is not a cosmetic problem, it changes what the image means.

## Architecture notes

The generator in the original paper is an encoder, a stack of residual blocks,
and a decoder. The residual blocks are the important part: they let the network
learn a _modification_ to the input rather than regenerating it from scratch,
which is exactly the right inductive bias when input and output share structure.
For 256×256 inputs, nine residual blocks is the standard configuration.

The discriminator is a PatchGAN — instead of one real/fake score for the whole
image, it outputs a grid of scores, each judging a 70×70 patch. This pushes the
model toward local textural realism and keeps the parameter count down.

Two training details that are not optional in practice:

1. **Instance normalisation, not batch normalisation.** Style-transfer-shaped
   problems care about per-image statistics, and batch norm mixes them across
   the batch.
2. **A replay buffer of generated images.** Update the discriminators using a
   pool of the last ~50 generated images rather than only the current batch. It
   damps the oscillation that otherwise shows up around epoch 20 and never
   really settles.

## Where it breaks down

Cycle-consistency buys you a lot, but it is not free of failure modes, and it is
worth being honest about them:

- **Geometry is hard.** CycleGAN is very good at texture and colour, and much
  worse at changes that require moving things around. It will happily restyle a
  horse as a zebra; it will not turn a cat into a dog.
- **Steganography.** The network can learn to hide a low-amplitude encoding of
  the source image inside the translated output, so that `F` can reconstruct `x`
  perfectly without the translation being semantically meaningful. The cycle loss
  is satisfied; you have been cheated. Chu et al. documented this well.
- **Hallucination.** In a medical context this is the one that matters. The model
  will produce a plausible T2 scan, and plausibility is not accuracy. A lesion
  that is not there can be invented; one that is there can be smoothed away.
  These outputs are a research artefact, not a diagnostic instrument.

## What I built with it

I trained a CycleGAN with ResNet blocks on unpaired T1 and T2 brain MRI slices.
The code is on [GitHub](https://github.com/rajrathi/image2imageBrainMRI).

> **PLACEHOLDER — fill this in.** Add your own results here: dataset and size,
> how long training ran and on what hardware, the SSIM/PSNR you reached, and a
> couple of sample outputs including a failure case. This is the part of the post
> readers will actually want, and it is the part only you can write.

## The takeaway

If you remember one thing: the GAN loss makes the output _look right_, and the
cycle loss makes it _correspond to the input_. Unpaired translation needs both,
and of the two, the cycle-consistency term is the one doing the load-bearing
work. Remove it and the model still produces beautiful images — of nothing in
particular.

---

**References**

- Zhu, Park, Isola & Efros, [_Unpaired Image-to-Image Translation using
  Cycle-Consistent Adversarial Networks_](https://arxiv.org/abs/1703.10593)
  (ICCV 2017)
- Chu, Zhmoginov & Sandler, [_CycleGAN, a Master of
  Steganography_](https://arxiv.org/abs/1712.02950) (2017)

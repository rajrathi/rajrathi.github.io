"""Generate the default Open Graph share card (1200x630)."""
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
BG = (10, 10, 17)
GRID = (34, 38, 62)
CYAN = (53, 230, 224)
MAGENTA = (255, 95, 210)
AMBER = (255, 194, 61)
TEXT = (234, 234, 244)
MUTED = (162, 162, 186)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# Faint terminal grid, fading toward the bottom.
step = 52
for x in range(0, W, step):
    d.line([(x, 0), (x, H)], fill=GRID, width=1)
for y in range(0, H, step):
    d.line([(0, y), (W, y)], fill=GRID, width=1)

# Fade the grid out downward by blending a gradient of the background over it.
fade = Image.new("L", (1, H))
for y in range(H):
    fade.putpixel((0, y), int(255 * min(1.0, (y / H) ** 1.2 * 1.35)))
img = Image.composite(Image.new("RGB", (W, H), BG), img, fade.resize((W, H)))
d = ImageDraw.Draw(img)

# Neon corner glows.
glow = Image.new("RGB", (W, H), BG)
gd = ImageDraw.Draw(glow)
gd.ellipse([-260, -300, 620, 380], fill=(18, 46, 55))
gd.ellipse([700, -240, 1420, 300], fill=(44, 18, 46))
glow = glow.filter(ImageFilter.GaussianBlur(110))  # no visible edge
img = Image.blend(img, glow, 0.55)
d = ImageDraw.Draw(img)

mono = "/System/Library/Fonts/Menlo.ttc"
f_name = ImageFont.truetype(mono, 78, index=1)   # bold
f_role = ImageFont.truetype(mono, 33, index=0)
f_tag = ImageFont.truetype(mono, 25, index=0)
f_small = ImageFont.truetype(mono, 22, index=1)

x0, y0 = 82, 132

# Prompt marker
d.text((x0, y0 - 58), "~/", font=f_small, fill=CYAN)
d.text((x0 + 34, y0 - 58), "rajrathi.github.io", font=f_small, fill=MUTED)

d.text((x0, y0), "Rajeshwar", font=f_name, fill=TEXT)
d.text((x0, y0 + 92), "Rathi", font=f_name, fill=CYAN)

d.text((x0, y0 + 208), "Machine Learning & Data Engineer", font=f_role, fill=MUTED)

# Accent rule
d.rectangle([x0, y0 + 268, x0 + 96, y0 + 272], fill=MAGENTA)

lines = [
    "Applied ML, data engineering and cloud —",
    "projects, notes, and things worked out the hard way.",
]
for i, line in enumerate(lines):
    d.text((x0, y0 + 306 + i * 38), line, font=f_tag, fill=MUTED)

# Terminal dots, bottom-right
for i, c in enumerate((MAGENTA, AMBER, CYAN)):
    d.ellipse([W - 150 + i * 34, H - 74, W - 132 + i * 34, H - 56], fill=c)

img.save("/Users/rajrathi/Developer/code/rajrathi.github.io/public/img/og-default.png", optimize=True)
print("written")

module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://rajrathi.tech`,
    // Your Name
    name: 'Rajeshwar Rathi',
    // Main Site Title
    title: `Rajeshwar Rathi | Machine Learning Researcher and Engineer`,
    // Description that goes under your name in main bio
    description: `A full-time Machine Learning Engineer at Bitwise and 
    part-time Data Science grad student at LJMU, UK with research interests 
    in computer vision, vision transformers, generative models, attention 
    models and exploring neuroscience based Machine Learning.`,
    // Optional: Twitter account handle
    author: `@rajeshwar_rathi`,
    // Optional: Github account URL
    github: `https://github.com/rajrathi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/rajeshwarrathi/`,
    //Optional: Email ID
    mail: `rajeshwar.r.rathi@gmail.com`,
    // Content of the About Me section
    about: `I am a curious and motivated Machine Learning Researcher aiming 
    to solve the social and ecological problems affecting humans and the 
    environment. I expertise in Machine Learning algorithms and Deep Learning 
    architectures, especially in Vision tasks such as image classification, 
    object detection, segmentation, etc. My main priority is to make ML 
    accessible to as many humans as possible and make even children understand 
    the basics of ML. Though I love spending time on ML, I also work on software 
    development to automate stuff.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name:
          'Unpaired Image Translation for Brain MRI (T1 to T2 and vice-versa) using CycleGAN',
        description:
          'Developed a deep learning model for creating Brain MRI of type T1 from type T2 and vice versa using CycleGAN fused with ResNet blocks to reduce the cost, time and efforts while taking two types of MRI.',
        link: 'https://github.com/rajrathi/image2imageBrainMRI',
        technology: 'Python Tensorflow skimage Matplotlib NumPy',
      },
      {
        name:
          'HuggingFace space for generating specific handwritten digits using Conditional GAN',
        description:
          'Created a HuggingFace space for generating the number of hand-written digit samples for specified digit between 0 and 9 to showcase the use of Conditional GAN.',
        link: 'https://huggingface.co/spaces/keras-io/conditional-GAN',
        technology: 'Python Keras Gradio HuggingFace NumPy',
      },
      {
        name: 'Impact Analysis Engine for Microservices',
        description:
          'Developed and deployed an utility to generate the dependency graphs for Microservices using config files and log files to reduce the latency for component automation. This tool calculates the impact score of a microservice on architecture if that microservice is down depending on the weightage of microservice and bug severity.',
        link: '',
        technology:
          'Python NetworkX GraphViz regex Plotly Pandas Jenkins CI/CD',
      },
      {
        name: 'Helmet Detection for Realtime Road Transport Video',
        description:
          'Built an API for detecting if a two wheeler user is wearing helmet while transporting using R-CNN with an AUC score of appromixately 85% to assure the safety of people and help maintain law',
        link: '',
        technology: 'Python Keras OpenCV NumPy Flask',
      },
      {
        name: 'Ecommerce Android Application',
        description:
          'Developed an ecommorce android application for local shops to help small-scale business and their customers in tough time of COVID-19 with functionality of placing orders, checking orders, adding product to carts, adding mutliple addresses, etc. in real-time.',
        link: 'https://github.com/rajrathi/EcommerceApplication',
        technology: 'Flutter Dart Firebase',
      },
      {
        name: 'Trading System',
        description:
          'Developed a mock stock trading platform with team, where I contributed for exchange connectivity between frontend and backend using REST API methods',
        link: '',
        technology: 'Python Flask JSON C++ SQlite',
      },
      {
        name: 'Terminal based Text Editor',
        description:
          'Developed a terminal based text-editor with functionalities like find, search and replace, delete line, save file, etc.',
        link: '',
        technology: 'C ncurses regex',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Bitwise Inc.',
        description:
          'Programmer (Machine Learning), Sep 2020 - Present',
        link: '',
      },
      {
        name: 'Veritas LLC',
        description: 'SDE Intern, Jan 2020 - Jun 2020',
        link: '',
      },
      {
        name: 'VInvent Tech',
        description: 'SDE Intern (Machine Learning), May 2019 - Jul 2019',
        link: '',
      },
    ],
    education: [
      {
        name: 'Liverpool John Moores University, Liverpool',
        description: 'M. Sc Data Science, Jan 2021',
        link: '',
      },
      {
        name: 'College of Engineering, Pune',
        description: 'B. Tech Computer Science, Aug 2016 - Oct 2020',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C++, C, Flutter, LaTeX, ReactJS, Tailwind CSS, GatsbyJS',
      },
      {
        name: 'Python libraries',
        description:
          'PyTorch, TensorFlow, Keras, scikit-learn, statsapi, OpenCV, NetworkX, GraphViz, NumPy, Pandas, Matplotlib, Seaborn, Plotly, Flask, SQLite',
      },
      {
        name: 'Machine Learning',
        description:
          'Linear Regression, Logistic Regression, Clustering (kNN, k-Means), Gradient Descent, Decision Trees, Ensembling (Random Forest, XGBoost), Regularization, Cross-Validation, Probability, Statistics',
      },
      {
        name: 'Deep Learning',
        description:
          'ANN, CNN(AlexNet, VGG, ResNet, XceptionNet, EfficientNet, ConvNext, etc.), RNN, LSTM, GRU, Optimizers (Momentum, AdaGrad, Adam, etc.), Back Propogation, Multi-headed Self Attention, Vision Transformers',
      },
      {
        name: 'Databases and ETL',
        description:
          'SQLServer, MySQL, RedShift, Firebase, Azure Data Factory, S3, Airflow',
      },

      {
        name: 'Tools',
        description:
          'Git, Amazon Web Services (AWS), Jupyter Notebook, Google Colab, Jenkins, JIRA, Postman, Android Studio',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-emoji',
            options: {
              emojiConversion: 'toImage',
              ascii: false,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],   
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                name
                title
                description
                about
                author
                github
                linkedin
                medium
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
                limit: 5
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                      description
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-XBJ3CG2MY0', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rrblogger`,
        short_name: `rrblogger`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

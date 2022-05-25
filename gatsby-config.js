module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://rajrathi.github.io`,
    // Your Name
    name: 'Rajeshwar Rathi',
    // Main Site Title
    title: `Rajeshwar Rathi | Machine Learning Engineer and Researcher`,
    // Description that goes under your name in main bio
    description: `Machine Learning Researcher and Engineer`,
    // Optional: Twitter account handle
    author: `@rajeshwar_rathi`,
    // Optional: Github account URL
    github: `https://github.com/rajrathi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/rajeshwarrathi/`,
    // Content of the About Me section
    about: `I am a curious and motivated Machine Learning Researcher aiming to solve the social and ecological problems affecting humans and the environment. I expertise in Machine Learning algorithms and Deep Learning architectures, especially in Vision tasks such as image classification, object detection, segmentation, etc. My main priority is to make ML accessible to as many humans as possible and make even children understand the basics of ML. Though I love spending time on ML, I also work on software development to automate stuff.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Unpaired Image Translation for Brain MRI (T1 to T2 and vice-versa) using CycleGAN',
        description:
          'Developed a model for ',
        link: 'https://github.com/rajrathi/image2imageBrainMRI',
        technology: 'Python Tensorflow skimage Matplotlib NumPy',
      },
      {
        name: 'HuggingFace space for generating specific handwritten digits using Conditional GAN',
        description:
          '',
        link: 'https://huggingface.co/spaces/keras-io/conditional-GAN',
        technology: 'Python Keras Gradio HuggingFace NumPy',
      },
      {
        name: 'Impact Analysis Engine for Microservices',
        description:
          'Developed an utility to generate the dependency graphs for Microservices and calculate the impact score of a microservice on architecture if that microservice is down.',
        link: '',
        technology: 'Python NetworkX GraphViz regex Plotly Pandas Jenkins CI/CD',
      },
      {
        name: 'Helmet Detection for Realtime Road Transport Video',
        description:
          '',
        link: '',
        technology: 'Python Keras OpenCV NumPy Flask',
      },
      {
        name: 'Ecommerce Android Application',
        description:
          '',
        link: 'https://github.com/rajrathi/EcommerceApplication',
        technology: 'Flutter Dart Firebase',
      },
      {
        name: 'Trading System',
        description:
          '',
        link: '',
        technology: 'Python Flask JSON C++ SQlite',
      },
      {
        name: 'Terminal based Text Editor',
        description:
          '',
        link: '',
        technology: 'C ncurses regex',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Bitwise Inc.',
        description: 'Programmer (Data Engineer), Sep 2020 - Present',
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
        description: 'M. Sc Data Science, Jan 2022 - Aug 2022',
        link: ''
      },
      {
        name: 'International Institute of Information Technology, Bangalore',
        description: 'PG Diploma Data Science, Jan 2021 - Jan 2022',
        link: ''
      },
      {
        name: 'College of Engineering, Pune',
        description: 'B. Tech, Aug 2016 - Oct 2020',
        link: ''
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C++, C, Flutter',
      },
      {
        name: 'Python libraries',
        description: 'NumPy, Pandas, Matplotlib, scikit-learn, statsapi, PyTorch, TensorFlow, Keras, OpenCV, NetworkX, GraphViz'
      },
      {
        name: 'Databases and ETL',
        description: 'SQLServer, MySQL, RedShift, Azure Data Factory, Informatica',
      },
      
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), CI / CD (Jenkins), Agile / Scrum',
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

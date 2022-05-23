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
    about: `I am a curious Machine Learning Researcher aiming to solve the problems affecting the society, environment and Earth. I am highly interested in developing novel Machine Learning techniques and Neural Network architectures espicially in Vision tasks.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Unpaired Image Translation for Brain MRI (T1 to T2 and vice-versa) using CycleGAN',
        description:
          '',
        link: 'https://github.com/rajrathi/image2imageBrainMRI',
      },
      {
        name: 'Impact Analysis Engine for Microservices',
        description:
          '',
        link: '',
      },
      {
        name: 'Helmet Detection for Realtime Road Transport Video',
        description:
          '',
        link: '',
      },
      {
        name: 'Trading System',
        description:
          '',
        link: '',
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

module.exports = {
  siteTitle: "Hi! I'm Nguyen!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Vinh Nguyen Ngo',
  twitterUsername: 'nvn1402',
  githubUsername: 'vinhnguyen1402',
  authorAvatar: '/images/avatar-nguyen.jpeg',
  authorDescription: `Passionate about web development, I began my journey in 2022, initially exploring the foundations of HTML out of pure curiosity. <br />
  In just my first year of professional experience, I transitioned from a support technician role to a frontend developer.
  During this time, I immersed myself in JavaScript and React, finding joy in crafting interactive and user-friendly web interfaces. <br />
  The continuous challenges and opportunities for growth keep my enthusiasm alive as I contribute to creating engaging web experiences.</strong><br />
  With all of my knowledge and experience, I will make every effort to contribute to the company’s growth, thereby making valuable products for society.`,
  school1: 'Evergreen Valley College',
  school1Description: 'AS Degree for transfer in MIS  2020 - 2022',
  school2: 'San Jose State University',
  school2Description:
    ' Currently working on the BA Degree in MIS 2022 - Expected Graduated 2024',
  skills: [
    {
      name: 'HTML',
      level: 70,
    },
    {
      name: 'CSS',
      level: 60,
    },
    {
      name: 'Javascript',
      level: 50,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'React',
      level: 60,
    },
    {
      name: 'Git',
      level: 70,
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: 'Santa Clara County',
      begin: {
        month: 'Nov',
        year: '2023',
      },
      duration: 'Present',
      occupation: 'Mental Health Peer Support Worker',
      description:
        'Provides empathetic assistance and understanding to individuals dealing with mental health challenges, leveraging their own lived experiences to offer peer support, encouragement, and practical coping strategies on the path to recovery.',
    },
    {
      company: 'DC&K Inc.',
      begin: {
        month: 'Apr',
        year: '2021',
      },
      duration: '2 years 6 months',
      occupation: 'Co-Manager',
      description:
        'Maintain the operation and scheduling. Offered advice and assistance to customers, paying attention to special needs or wants. Provided primary customer support to internal and external customers.',
    },
    {
      company: 'Tastea',
      begin: {
        month: 'Jan',
        year: '2020',
      },
      duration: '3 months',
      occupation: 'Barista',
      description:
        'Maintained customer satisfaction while handling product returns quickly and professionally. Handled daily credit and cash transactions for customers with accuracy and speed.',
    },
  ],
  portfolio: [
    {
      image: '/images/gatsby-portfolio.png',
      description: 'Gatsby Resume',
      url: 'https://github.com/vinhnguyen1402/porfolio_gatsby',
    },
    {
      image: '/images/the-grocery-co-website.png',
      description: 'The Grocery Co. Website',
      url: 'https://github.com/Vy-X-S/BUS118W-Group_5#readme',
    },
    /* more portfolio items here */
  ],
  social: {
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/vinh-nguyen-ngo-49089824a/',
    github: 'https://github.com/vinhnguyen1402',
    email: 'andyngo1402@gmail.com',
  },
  siteUrl: 'https://vinhnguyen1402.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/background.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: '#000000cc',
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
  ],
}

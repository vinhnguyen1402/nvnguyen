module.exports = {
  siteTitle: "Hi! I'm Nguyen!",
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Vinh Nguyen Ngo',
  twitterUsername: 'nvn1402',
  githubUsername: 'vinhnguyen1402',
  authorAvatar: '/images/avatarNguyen.jpeg',
  authorDescription: `Passionate about web development, I began my journey in 2022, initially exploring the foundations of HTML out of pure curiosity. <br />
  In just my first year of professional experience, I transitioned from a support technician role to a frontend developer.
  During this time, I immersed myself in JavaScript and React, finding joy in crafting interactive and user-friendly web interfaces. <br />
  The continuous challenges and opportunities for growth keep my enthusiasm alive as I contribute to creating engaging web experiences.</strong>`,
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
      company: 'Gympass',
      begin: {
        month: 'sep',
        year: '2019',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies.',
    },
    {
      company: 'Lendico',
      begin: {
        month: 'apr',
        year: '2018',
      },
      duration: null,
      occupation: 'Frontend developer',
      description:
        'I integrate the Frontend team responsible for developing and maintaining the online lending platform.',
    },
    {
      company: 'Anapro',
      begin: {
        month: 'dec',
        year: '2016',
      },
      duration: '1 yr e 5 mos',
      occupation: 'Fullstack developer',
      description:
        'Development and maintenance, corrective and preventive, of web applications for the real estate market.',
    },
    {
      company: 'Anapro',
      begin: {
        month: 'set',
        year: '2012',
      },
      duration: '4 yrs e 3 mos',
      occupation: 'Support Technician',
      description:
        'Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool.',
    },
  ],
  portifolio: [
    {
      image: '/images/GatsbyPortfolio.png',
      description: 'Gatsby Resume',
      url: 'https://github.com/vinhnguyen1402/porfolio_gatsby',
    },
    {
      image: '/images/TheGroceryCoWebsite.png',
      description: 'The Grocery Co. Website',
      url: 'https://github.com/Vy-X-S/BUS118W-Group_5#readme',
    },
    /* more portifolio items here */
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
      label: 'Portifolio',
      url: '/portifolio',
    },
  ],
}

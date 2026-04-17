type Project = {
  name: string
  description: string
  link: string
  id: string
  img: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'BiasScope',
    description:
      'An AI-Powered Media Bias & Sentiment Analyzer',
    link: 'https://biasscope-app.vercel.app',
    id: 'project1',
    img: "https://images.seattletimes.com/wp-content/uploads/2021/08/pressTSR.jpg?d=780x501"
  },
  {
    name: 'DataScope',
    description: 'An AI-Powered dataset debugger.',
    link: 'https://datascope-app.vercel.app',
    id: 'project2',
    img: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdata-analytics-cartoon&ved=0CBYQjRxqFwoTCKjKgpbd9ZMDFQAAAAAdAAAAABAG&opi=89978449"
  },
  {
    name: 'Custom C++ Shell',
    description: 'A UNIX like shell implementation written in C++',
    link: 'https://github.com/kankaniakshat185/Custom-Shell',
    id: 'project3',
    img: "https://st.depositphotos.com/1537427/4584/v/450/depositphotos_45847715-stock-illustration-vector-command-line-icon.jpg"
  },
  {
    name: 'Conway\'s game of Life',
    description: 'A Pygame implementation of the famous, Conway\'s game of Life',
    link: 'https://github.com/kankaniakshat185/conways-game-of-life',
    id: 'project4',
    img: "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Femergentuniverse.fandom.com%2Fwiki%2FConway%27s_Game_of_Life&ved=0CBUQjRxqFwoTCLDos9rd9ZMDFQAAAAAdAAAAABAG&opi=89978449"
  },


]

// export const WORK_EXPERIENCE: WorkExperience[] = [
//   {
//     company: 'Reglazed Studio',
//     title: 'CEO',
//     start: '2024',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work1',
//   },
//   {
//     company: 'Freelance',
//     title: 'Design Engineer',
//     start: '2022',
//     end: '2024',
//     link: 'https://ibelick.com',
//     id: 'work2',
//   },
//   {
//     company: 'Freelance',
//     title: 'Front-end Developer',
//     start: '2017',
//     end: 'Present',
//     link: 'https://ibelick.com',
//     id: 'work3',
//   },
// ]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'A deep dive into me',
    description: 'A deep dive into me and my interests',
    link: '/blog/a-deep-dive-into-me',
    uid: 'blog-1',
  },
  {
    title: 'Thinking in systems: How I learn Computer Science',
    description:
      'A deep dive into how I see Computers and my thoughts about everything related.',
    link: '/blog/thinking-in-systems',
    uid: 'blog-2',
  },
  {
    title: 'Dreams. Goals',
    description:
      'An ever expanding page going deep into what I\'ve always dream\'t about and the goals I strive to achieve.',
    link: '/blog/my-dreams-and-goals',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    link: 'mailto:kankaniakshat185@gmail.com'
  },
  {
    label: 'Github',
    link: 'https://github.com/kankaniakshat185',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/akshat-kankani/',
  },
  {
    label: 'Leetcode',
    link: 'https://leetcode.com/u/Akshat185/'
  },
  {
    label: 'Resume',
    link: '/Resume.pdf'
  }
]

export const EMAIL = 'kankaniakshat185@gmail.com'

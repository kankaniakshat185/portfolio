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
    link: 'https://github.com/kankaniakshat185/BiasScope',
    id: 'project1',
    img: "https://images.seattletimes.com/wp-content/uploads/2021/08/pressTSR.jpg?d=780x501"
  },
  {
    name: 'Custom C Filesystem',
    description: 'A UNIX like filesystem implementation written in C',
    link: 'https://github.com/kankaniakshat185/Custom-C-Filesystem',
    id: 'project2',
    img: "https://media.gettyimages.com/id/1937108020/vector/computer-file-folder-window-drawing.jpg?s=612x612&w=0&k=20&c=ieEc5Of8jgHGlOeSY_4Uod0WIQjESOss1bTLqA-d5Rw="
  },
  {
    name: 'Custom C++ Shell',
    description: 'A UNIX like shell implementation written in C++',
    link: 'https://github.com/kankaniakshat185/Custom-Shell',
    id: 'project2',
    img: "https://st.depositphotos.com/1537427/4584/v/450/depositphotos_45847715-stock-illustration-vector-command-line-icon.jpg"
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
    label: 'Email',
    link: 'mailto:kankaniakshat185@gmail.com'
  },
  {
    label: 'Resume',
    link: '/Resume.pdf'
  }
]

export const EMAIL = 'kankaniakshat185@gmail.com'

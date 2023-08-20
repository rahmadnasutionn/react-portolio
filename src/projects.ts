import { Projects } from "./interfaces";

const projects: Projects[] = [
  {
    title: 'React Components',
    excerpt:
      'React Components',
    srcUrl: 'https://github.com/rahmadnasutionn/react-component',
    linkYoutube: 'https://www.youtube.com/playlist?list=PLD3W7R_0QrkETstUIzPr0K3cRhqZnAlhx',
    createdAt: '20/7/2023',
    tags: [
      'react',
      'vite.js',
      'typescript',
      'tailwindcss',
    ],
    unFinished: true,
  },
  {
    title: 'animations and hooks',
    excerpt:
      'A collection of handmade, free, written with typescript, and ready to use animations & hooks for your next project.',
    demoUrl: 'https://animation-hooks.vercel.app/',
    srcUrl: 'https://github.com/rahmadnasutionn/animation-hooks',
    createdAt: '20/7/2023',
    tags: [
      'react',
      'next.js',
      'typescript',
      'tailwindcss',
      'shadc-ui',
      'custom-hooks',
      'jest',
      'react-testing-library'
    ],
    unFinished: true,
  },
  {
    title: 'comfysloth',
    excerpt:
      'Comfysloth an eccomerce application',
    demoUrl: 'https://gadget-junkie.netlify.app/',
    srcUrl: 'https://github.com/rahmadnasutionn/comfysloth',
    createdAt: '10/2/2023',
    tags: [
      'react',
      'typescript',
      'styled-components',
      'stripe'
    ],
    unFinished: true,
  },
  {
    title: 'jobster',
    excerpt:
      'Jobster is an app for finding jobs, making job applications',
    demoUrl: 'https://jobster-app.vercel.app/landing',
    srcUrl: 'https://github.com/rahmadnasutionn/jobster-app',
    createdAt: '10/2/2022',
    tags: [
      'react',
      'typescript',
      'redux-toolkit',
      'styled-components',
      'chart-js'
    ],
    unFinished: true,
  },
]

export default projects;
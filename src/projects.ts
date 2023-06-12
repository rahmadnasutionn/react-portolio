import { Projects } from "./interfaces";

const projects: Projects[] = [
  {
    title: 'next movies',
    excerpt:
      'Learn and create a web movie',
    srcUrl: 'https://github.com/rahmadnasutionn/nextjs13-movie',
    createdAt: '11/6/2023',
    tags: [
      'react',
      'next.js',
      'typescript',
      'tailwindcss',
      'tmdbapi',
      'react-query',
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
  {
    title: 'grilly',
    excerpt:
      'Grilly is an application to fulfil submission dicoding in becoming front-end developer expert',
    srcUrl: 'https://github.com/rahmadnasutionn/grily-app-pwa',
    createdAt: '17/2/2022',
    tags: [
      'html',
      'javascript',
      'css',
      'pwa'
    ],
    unFinished: true,
  },
  {
    title: 'cocktail',
    excerpt:
      'submission front fundamental at dicoding',
    srcUrl: 'https://github.com/rahmadnasutionn/cocktail',
    createdAt: '10/12/2022',
    tags: [
      'html',
      'javascript',
      'css',
    ],
    unFinished: true,
  },
  {
    title: 'bookshelf',
    excerpt:
      'submission of data management application using dom and local storage',
    srcUrl: 'https://github.com/rahmadnasutionn/cocktail',
    createdAt: '10/12/2022',
    tags: [
      'html',
      'javascript',
      'css',
    ],
    unFinished: true,
  },
]

export default projects;
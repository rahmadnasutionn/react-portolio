import {
  react,
  redux,
  nodeJs,
  mongoDb,
  tailwind,
  typescript,
  html,
  css,
  git,
  javascript,
  flutter,
  dart,
} from './assets';

export const siteMetadata = {
  siteUrl: 'https://rahmadnasutionn.vercel.app',
  author: 'Rahmadnasutionn',
  mail: 'rahmadn241@gmail.com',
};

export const idLocalization = {
  pages: {
    homePage: {
      title: 'Pengembang yang bersemangat',
      description: 
        'Hai semuanya 👋 Nama saya Rahmad Nasution dan saya suka membangun beberapa hal yang hidup di web, atau di luar. Selamat datang di kebun saya!'       
    },
    mePage: {
      title: 'Beberapa kata tentang saya',
      description:
        'Saya seorang Software Engineer yang berspesialisasi di sisi frontend, keahlian utama saya adalah frontend dev menggunakan React. Saya juga memiliki kemampuan untuk membuat kode di sisi backend. Saya sangat tertarik dengan teknologi web modern menggunakan JavaScript/TypeScript dengan mempertimbangkan tren dan teknik terbaru. Selain pemrograman,',
      description2:
        'Saya tertarik pada bidang olahraga dan senang berolahraga seperti bersepeda atau senam, dan saya suka music.' 
    },
    projectPage: {
      title: 'Bekerja, belajar, dan meningkatkan kemampuan',
      description:
        'Saya suka membuat sesuatu, serius, saya kecanduan 🤣. Saya suka menulis kode yang bersih, bekerja di backend atau frontend, membangun web, Saat ini, saya sangat senang dengan topik yang berhubungan dengan React dan Typescript.'  
    }
  }
};

export const enLocalization = {
  pages: {
    homePage: {
      title: 'Passionate Developer',
      description:
      'Hi everyone 👋 My name is Rahmad Nasution and I love build some stuff living in the web, or outside. Welcome to my site!',
    },
    mePage: {
      title: 'Some words about me',
      description:
        "I'm Software Engineer who specialized in frontend side, My main skill is frontend dev using React. I also have an ability to code in backend side. Very passionate about modern web technology using JavaScript, TypeScript while taking into consideration the latest trends and techniques.",
    },
    projectPage: {
      title: 'Work, learn, and improve abilities',
      description:
        "I love to build stuffs, seriously. I like both writing clean code, work on backend or frontend, building web. These are just a few of the projects that I published"
    }
  }
}

export const navMenu = [
  { label: 'me', path: '/me' },
  { label: 'projects', path: '/projects' },
  { label: 'contact', path: '/contact' },
];

export const links = {
  github: 'https://github.com/rahmadnasutionn',
  linkedin: 'https://www.linkedin.com/in/rahmad-nasution-709b45245/',
  youtube: 'https://www.youtube.com/channel/UCMmQO_Xswhuu6MNvngNU42w',
  dribble: 'https://dribbble.com/rahmadnasutionn',
};

export const socialMenu = [
  { label: 'github', link: links.github },
  { label: 'linkedin', link: links.linkedin },
  { label: 'youtube', link: links.youtube },
  { label: 'dribbble', link: links.dribble },
];

export const tools = [
  { src: react, alt: 'react' },
  { src: redux, alt: 'redux' },
  { src: nodeJs, alt: 'nodeJs' },
  { src: mongoDb, alt: 'mongoDb' },
  { src: typescript, alt: 'typescript' },
  { src: tailwind, alt: 'tailwind' },
  { src: html, alt: 'html' },
  { src: css, alt: 'css' },
  { src: git, alt: 'git' },
  { src: javascript, alt: 'javascript' },
  { src: flutter, alt: 'flutter' },
  { src: dart, alt: 'dart' },
];
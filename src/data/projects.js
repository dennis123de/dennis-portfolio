// src/data/projects.js
export const projects = [
  {
    slug: 'teenovatex',
    title: 'TeenovateX',
    role: 'Backend Developer',
    description:
      'Built backend features and data workflows for a platform helping young people develop entrepreneurial skills.',
    tech: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Prisma ORM'],
    liveUrl: 'https://www.teenovatex.org/',
    githubUrl: null,
    image: '/projects/teenovatex.webp',
    previewType: 'architecture',
  },
  {
    slug: 'pelumi-portfolio',
    title: 'Pelumi Ponmile Portfolio',
    role: 'Frontend Developer',
    description:
      'Designed and built an artist portfolio that presents creative work clearly and makes inquiries easy with a connected contact form.',
    tech: ['React', 'EmailJS'],
    liveUrl: 'https://pelumi-ponmile-portfolio.vercel.app/',
    githubUrl: null, // Private repository — do not display
    image: '/projects/pelumi-portfolio.webp',
  },
  {
    slug: 'fhast-pay',
    title: 'Fhast Pay',
    role: 'Collaborative Developer',
    description:
      'A collaborative payments product combining a modern frontend with a secure API, authentication, and structured data validation.',
    tech: [
      'React 19', 'TypeScript', 'Vite', 'React Router 7', 'CSS Modules',
      'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL',
      'JWT', 'Bcrypt.js', 'Zod',
    ],
    liveUrl: 'https://fhast-pay.vercel.app/',
    githubUrl: 'https://github.com/dennis123de/fhast-pay',
    image: '/projects/fhast-pay.webp',
  },
]

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
  {
    slug: 'naira-shield',
    title: 'NairaShield',
    role: 'App, interface & accessibility · Team of two',
    tagline: 'A voice-first tool helping blind and low-vision customers verify POS debits.',
    description:
      'Say your expected amount. NairaShield reads the bank alert aloud and warns by speech and vibration if the debit is higher, so you can challenge the agent on the spot.',
    tech: ['React', 'TypeScript', 'Vite', 'Web Speech API', 'Vitest'],
    highlights: [
      'Voice-first flow with a typed fallback',
      'Rules-based parsing for multiple Nigerian bank alert formats',
      'Screen reader support, large print, and high contrast',
      'Private dispute log stays on the device',
    ],
    projectNote:
      'Working hackathon prototype; alert capture is simulated. Built for the AI for the Visually Impaired Hackathon (Accessible Financial Services track).',
    liveUrl: 'https://naira-shield.vercel.app/',
    githubUrl: null,
    image: '/projects/naira-shield.webp',
    imageAlt: 'Placeholder preview for NairaShield, a voice-first POS debit checking app',
  },
  {
    slug: 'faim-arts',
    title: 'Faim Arts',
    role: 'Frontend and design · Built with a partner',
    tagline: 'Portfolio website for Nigerian graphite and charcoal artist Iyanuoluwapo Akoteyon.',
    description:
      'Showcases her portraiture and storytelling artwork, with gallery, about, and contact sections.',
    tech: ['React', 'Tailwind CSS', 'EmailJS'],
    liveUrl: 'https://www.faimarts.com/',
    githubUrl: null,
    sourceCodePrivate: true,
    image: '/projects/faim-arts.webp',
    imageAlt: 'Placeholder preview for Faim Arts, a graphite and charcoal artist portfolio',
  },
  {
    slug: 'study-mind',
    title: 'Study Mind',
    role: 'Backend development · Built with a friend',
    description:
      'A study tool that helps students break tasks down for maximum productivity.',
    tech: [],
    liveUrl: 'https://studymind-project.vercel.app/',
    githubUrl: null,
    sourceCodePrivate: true,
    image: '/projects/study-mind.webp',
    imageAlt: 'Placeholder preview for Study Mind, a student productivity tool',
  },
]

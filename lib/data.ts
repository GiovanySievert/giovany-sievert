import type { NavLink, Project, SkillCategory } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Vibe App',
    description:
      'Real-time crowd-sourced app where users post live reviews of venues — busy or empty — so you can discover where to go out in the city right now.',
    tech: [
      'React Native',
      'Expo',
      'Bun',
      'ElysiaJs',
      'Jest',
      'RabbitMQ',
      'Docker',
      'PostgreSQL',
      'DDD',
      'Hexagonal Architecture'
    ],
    githubUrls: [
      { label: 'backend', url: 'https://github.com/GiovanySievert/vibe-api' },
      { label: 'app', url: 'https://github.com/GiovanySievert/vibe-app' }
    ],
    liveUrl: 'working on it'
  }
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      'React',
      'React Native',
      'Expo',
      'Fastlane',
      'Vue.js',
      'TypeScript',
      'Next.js',
      'Capacitor',
      'Ruby on Rails'
    ]
  },
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'Bun',
      'Golang',
      'NestJS',
      'ElysiaJs',
      'TypeORM',
      'Drizzle',
      'Better Auth',
      'Domain-Driven Design',
      'Microservices'
    ]
  },
  {
    name: 'Database & Search',
    skills: ['PostgreSQL', 'Elasticsearch', 'Redis', 'MySQL', 'SupaBase', 'Prisma']
  },
  {
    name: 'Testing',
    skills: ['Jest', 'Playwright', 'Maestro', 'Detox']
  },
  {
    name: 'AI',
    skills: ['LLMs', 'RAG', 'AI Agents', 'MCP', 'LangChain', 'pgvector']
  },
  {
    name: 'Other tools',
    skills: [
      'DataDog',
      'PostHog',
      'Mixpanel',
      'App Store',
      'Google Play',
      'AWS',
      'RabbitMQ',
      'Docker',
      'Swagger',
      'CI/CD Pipelines'
    ]
  }
]

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
      'Drizzle ORM',
      'Swagger',
      'GitHub Actions',
      'DDD',
      'Hexagonal Architecture'
    ],
    githubUrls: [
      { label: 'backend', url: 'https://github.com/GiovanySievert/vibe-api' },
      { label: 'app', url: 'https://github.com/GiovanySievert/vibe-app' }
    ],
    liveUrl: 'working on it'
  },
  {
    id: '2',
    title: 'Ask Anything',
    description:
      'AI chat where you ingest technical documents and ask questions grounded in them — embeddings run locally on Ollama, and only the chunks semantic search retrieves are sent to Claude, which streams the answer back token by token.',
    tech: [
      'Go',
      'Chi',
      'PostgreSQL',
      'pgvector',
      'sqlc',
      'pgx',
      'Ollama',
      'Claude API',
      'RAG',
      'Server-Sent Events',
      'SwiftUI',
      'Testify'
    ],
    githubUrls: [
      { label: 'backend', url: 'https://github.com/GiovanySievert/ask-anything' },
      { label: 'app', url: 'https://github.com/GiovanySievert/ask-anything-app' }
    ]
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
      'Ruby on Rails',
      'SwiftUI',
      'iOS'
    ]
  },
  {
    name: 'Backend',
    skills: [
      'Node.js',
      'Bun',
      'Golang',
      'Chi',
      'NestJS',
      'ElysiaJs',
      'TypeORM',
      'Drizzle',
      'sqlc',
      'Better Auth',
      'Server-Sent Events',
      'Domain-Driven Design',
      'Microservices'
    ]
  },
  {
    name: 'Database & Search',
    skills: ['PostgreSQL', 'Elasticsearch', 'Redis', 'MySQL', 'SupaBase', 'Prisma', 'pgx']
  },
  {
    name: 'Testing',
    skills: ['Jest', 'Playwright', 'Maestro', 'Detox', 'Testify']
  },
  {
    name: 'AI',
    skills: ['LLMs', 'RAG', 'AI Agents', 'MCP', 'LangChain', 'pgvector', 'Ollama', 'Claude API']
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

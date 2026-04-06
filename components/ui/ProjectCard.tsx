import type { Project } from '@/types'
import { Badge } from './Badge'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-5 flex gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
            Demo ao vivo →
          </a>
        )}
      </div>
    </article>
  )
}

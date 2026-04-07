import { Fragment } from 'react'
import { projects } from '@/lib/data'
import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, K, B, V, S, T } from '@/components/ui/syntax'

export function Projects() {
  return (
    <div id="projects" className="bg-editor-bg font-mono text-sm text-syntax-plain py-2">
      <Lines>
        <Line><C>{'// PROJECTS'}</C></Line>
        <Line />
        <Line><K>interface </K><B>Project </B><span>{'{'}</span></Line>
        <Line indent={2}><V>title</V><span>: </span><B>string</B><span>;</span></Line>
        <Line indent={2}><V>description</V><span>: </span><B>string</B><span>;</span></Line>
        <Line indent={2}><V>tech</V><span>: </span><B>string</B><span>[];</span></Line>
        <Line indent={2}><V>github</V><span>?: </span><B>string</B><span>;</span></Line>
        <Line indent={2}><V>demo</V><span>?: </span><B>string</B><span>;</span></Line>
        <Line>{'}'}</Line>
        <Line />
        <Line><B>const </B><V>projects</V><span>: </span><B>Project</B><span>[] = [</span></Line>
        {projects.map((project) => (
          <Fragment key={project.id}>
            <Line />
            <Line indent={2}><C>{`// ${project.title}`}</C></Line>
            <Line indent={2}>{'{'}</Line>
            <Line indent={4}><V>title</V><span>: </span><S>&apos;{project.title}&apos;</S><span>,</span></Line>
            <Line indent={4}><V>description</V><span>: </span><S>&apos;{project.description}&apos;</S><span>,</span></Line>
            <Line indent={4}>
              <V>tech</V>
              <span>: [</span>
              {project.tech.map((t, i) => (
                <span key={t}>
                  <S>&apos;{t}&apos;</S>
                  {i < project.tech.length - 1 && <span>, </span>}
                </span>
              ))}
              <span>],</span>
            </Line>
            {project.githubUrls && project.githubUrls.map(({ label, url }) => (
              <Line key={label} indent={4}>
                <V>github_{label}</V>
                <span>: </span>
                <T>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    &apos;{url}&apos;
                  </a>
                </T>
                <span>,</span>
              </Line>
            ))}
            {!project.githubUrls && project.githubUrl && (
              <Line indent={4}>
                <V>github</V>
                <span>: </span>
                <T>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    &apos;{project.githubUrl}&apos;
                  </a>
                </T>
                <span>,</span>
              </Line>
            )}
            {project.liveUrl && (
              <Line indent={4}>
                <V>demo</V><span>: </span><T>&apos;{project.liveUrl}&apos;</T><span>,</span>
              </Line>
            )}
            <Line indent={2}>{'}'}<span className="text-editor-gutter">,</span></Line>
          </Fragment>
        ))}
        <Line />
        <Line cursorLine>];<Cursor /></Line>
      </Lines>
    </div>
  )
}

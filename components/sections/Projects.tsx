import { projects } from '@/lib/data'
import { Cursor } from '@/components/ui/Cursor'
import { C, K, B, V, S, T } from '@/components/ui/syntax'

export function Projects() {
  return (
    <div id="projects" className="min-h-full bg-editor-bg font-mono text-sm leading-6 p-10 text-syntax-plain">
      <p className="text-syntax-comment text-base font-bold tracking-widest mb-6">// PROJECTS</p>

      <div className="mb-5 space-y-0.5">
        <p>
          <K>interface </K>
          <B>Project </B>
          <span>{'{'}</span>
        </p>
        <div className="pl-8 space-y-0.5">
          <p><V>title</V><span>: </span><B>string</B><span>;</span></p>
          <p><V>description</V><span>: </span><B>string</B><span>;</span></p>
          <p><V>tech</V><span>: </span><B>string</B><span>[];</span></p>
          <p><V>github</V><span>?: </span><B>string</B><span>;</span></p>
          <p><V>demo</V><span>?: </span><B>string</B><span>;</span></p>
        </div>
        <p>{'}'}</p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="space-y-0.5">
        <p>
          <B>const </B>
          <V>projects</V>
          <span>: </span>
          <B>Project</B>
          <span>[] = [</span>
        </p>
        <div className="pl-8 space-y-6 mt-2">
          {projects.map((project) => (
            <div key={project.id} className="space-y-0.5">
              <p><C>{`// ${project.title}`}</C></p>
              <p>{'{'}</p>
              <div className="pl-8 space-y-0.5">
                <p><V>title</V><span>: </span><S>&apos;{project.title}&apos;</S><span>,</span></p>
                <p>
                  <V>description</V>
                  <span>: </span>
                  <S>&apos;{project.description}&apos;</S>
                  <span>,</span>
                </p>
                <p>
                  <V>tech</V>
                  <span>: [</span>
                  {project.tech.map((t, i) => (
                    <span key={t}>
                      <S>&apos;{t}&apos;</S>
                      {i < project.tech.length - 1 && <span>, </span>}
                    </span>
                  ))}
                  <span>],</span>
                </p>
                {project.githubUrls && project.githubUrls.map(({ label, url }) => (
                  <p key={label}>
                    <V>github_{label}</V>
                    <span>: </span>
                    <T>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        &apos;{url}&apos;
                      </a>
                    </T>
                    <span>,</span>
                  </p>
                ))}
                {project.githubUrl && (
                  <p>
                    <V>github</V>
                    <span>: </span>
                    <T>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        &apos;{project.githubUrl}&apos;
                      </a>
                    </T>
                    <span>,</span>
                  </p>
                )}
                {project.liveUrl && (
                  <p>
                    <V>demo</V>
                    <span>: </span>
                    <T>
                      <a>
                        &apos;{project.liveUrl}&apos;
                      </a>
                    </T>
                    <span>,</span>
                  </p>
                )}
              </div>
              <p>{'}'}<span className="text-editor-gutter">,</span></p>
            </div>
          ))}
        </div>
        <p className="mt-2">];<Cursor /></p>
      </div>
    </div>
  )
}

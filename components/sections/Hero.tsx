import { skillCategories } from '@/lib/data'
import { Cursor } from '@/components/ui/Cursor'
import { C, K, B, V, S, F } from '@/components/ui/syntax'

const activities = [
  { label: 'GitHub', href: 'https://github.com/GiovanySievert' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giovanysievert' }
]

export function Hero() {
  return (
    <div className="min-h-full bg-editor-bg font-mono text-sm leading-6 p-10 text-syntax-plain">
      <p className="text-syntax-comment text-base font-bold tracking-widest mb-6">// HI, I&apos;M GIOVANY SIEVERT</p>

      <div className="space-y-0.5 mb-5">
        <p>
          <K>import </K>
          <S>&apos;./professional.styles.scss&apos;</S>
          <span>;</span>
        </p>
      </div>

      <div className="mb-5 select-none space-y-0.5 text-zinc-600">
        <p>. . . .</p>
      </div>

      <div className="mb-8 space-y-0.5">
        <p>
          <B>const </B>
          <V>current </V>
          <span>= (</span>
          <F>job</F>
          <span>
            {')'} =&gt; {'{ '}
          </span>
          <K>return </K>
          <S>&apos;Tech Lead at Medprev | Senior Software Engineer&apos;</S>
          <span>{' };'}</span>
        </p>
        <p>
          <B>const </B>
          <V>location </V>
          <span>{'= [ '}</span>
          <S>&apos;Brazil&apos;</S>
          <span>, </span>
          <S>&apos;Willing to work remotely&apos;</S>
          <span>{' ];'}</span>
        </p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-600" />

      <div>
        <p>
          <B>const </B>
          <F>Professional </F>
          <span>{'= ({ '}</span>
          <V>skills </V>
          <span>{'}) => {'}</span>
        </p>

        <p className="pl-8">
          <K>return </K>
          <span>(</span>
        </p>

        <div className="mt-6 grid grid-cols-[1fr_260px] gap-x-16 pl-16">
          <div className="space-y-8">
            <div>
              <p>
                <C>{'{/* ABOUT */}'}</C>
              </p>
              <div className="mt-3 max-w-2xl space-y-3">
                <p>
                  Full Stack Developer with 6+ years of experience, focused on frontend with React and React Native.
                  Currently Tech Lead at Medprev, leading the mobile app team and driving technical decisions.
                </p>
                <p>
                  Strong teamwork skills — I enjoy keeping everyone aligned across designers, QA, and infrastructure
                  teams. Experienced with TypeScript, Node.js, NestJS, Vue, Bun, Elasticsearch, and Jest.
                </p>
              </div>
            </div>

            <div>
              <p>
                <C>{'{/* SKILLS */}'}</C>
              </p>
              <div className="mt-2">
                <p>{'{'}</p>
                <div className="mt-1 space-y-3 pl-8">
                  {skillCategories.map((cat) => {
                    const key = cat.name.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')
                    return (
                      <div key={cat.name}>
                        <p>
                          <V>{key}</V>
                          <span>: [</span>
                        </p>
                        <p className="pl-8">{cat.skills.join(', ')}</p>
                        <p>];</p>
                      </div>
                    )
                  })}
                </div>
                <p className="mt-1">{'}'}</p>
              </div>
            </div>
          </div>

          <div>
            <p>
              <C>{'{/* ACTIVITIES */}'}</C>
            </p>
            <ul className="mt-3 space-y-1">
              {activities.map((act) => (
                <li key={act.label} className="flex items-center gap-3">
                  <span className="shrink-0 text-zinc-500">. . .</span>
                  <a href={act.href} className="truncate text-syntax-teal hover:underline">
                    {act.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 pl-8">)</p>
        <p>
          {'}'}
          <Cursor />
        </p>
      </div>
    </div>
  )
}

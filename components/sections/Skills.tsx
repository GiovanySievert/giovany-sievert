import { skillCategories } from '@/lib/data'
import { Cursor } from '@/components/ui/Cursor'
import { C, K, B, V, S } from '@/components/ui/syntax'

export function Skills() {
  return (
    <div id="skills" className="min-h-full bg-editor-bg font-mono text-sm leading-6 p-10 text-syntax-plain">
      <p className="text-syntax-comment text-base font-bold tracking-widest mb-6">// SKILLS</p>

      <div className="mb-5 space-y-0.5">
        <p>
          <K>interface </K>
          <B>TechStack </B>
          <span>{'{'}</span>
        </p>
        {skillCategories.map((cat) => {
          const key = cat.name.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')
          return (
            <p key={cat.name} className="pl-8">
              <V>{key}</V>
              <span>: </span>
              <B>string</B>
              <span>[];</span>
            </p>
          )
        })}
        <p>{'}'}</p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="space-y-0.5">
        <p>
          <B>const </B>
          <V>stack</V>
          <span>: </span>
          <B>TechStack </B>
          <span>= {'{'}</span>
        </p>
        <div className="pl-8 space-y-4 mt-2">
          {skillCategories.map((cat) => {
            const key = cat.name.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')
            return (
              <div key={cat.name}>
                <p className="mb-0.5">
                  <C>{`// ${cat.name}`}</C>
                </p>
                <p>
                  <V>{key}</V>
                  <span>: [</span>
                </p>
                <p className="pl-8">
                  {cat.skills.map((skill, i) => (
                    <span key={skill}>
                      <S>&apos;{skill}&apos;</S>
                      {i < cat.skills.length - 1 && <span>, </span>}
                    </span>
                  ))}
                  <span>,</span>
                </p>
                <p>],</p>
              </div>
            )
          })}
        </div>
        <p className="mt-2">{'};'}<Cursor /></p>
      </div>
    </div>
  )
}

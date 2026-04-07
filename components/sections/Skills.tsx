import { Fragment } from 'react'
import { skillCategories } from '@/lib/data'
import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, K, B, V, S } from '@/components/ui/syntax'

export function Skills() {
  return (
    <div id="skills" className="bg-editor-bg font-mono text-sm text-syntax-plain py-2">
      <Lines>
        <Line><C>{'// SKILLS'}</C></Line>
        <Line />
        <Line><K>interface </K><B>TechStack </B><span>{'{'}</span></Line>
        {skillCategories.map((cat) => {
          const key = cat.name.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')
          return (
            <Line key={cat.name} indent={2}>
              <V>{key}</V><span>: </span><B>string</B><span>[];</span>
            </Line>
          )
        })}
        <Line>{'}'}</Line>
        <Line />
        <Line><B>const </B><V>stack</V><span>: </span><B>TechStack </B><span>= {'{'}</span></Line>
        {skillCategories.map((cat) => {
          const key = cat.name.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')
          return (
            <Fragment key={cat.name}>
              <Line />
              <Line indent={2}><C>{`// ${cat.name}`}</C></Line>
              <Line indent={2}>
                <V>{key}</V>
                <span>: [</span>
                {cat.skills.map((skill, i) => (
                  <span key={skill}>
                    <S>&apos;{skill}&apos;</S>
                    {i < cat.skills.length - 1 && <span>, </span>}
                  </span>
                ))}
                <span>],</span>
              </Line>
            </Fragment>
          )
        })}
        <Line />
        <Line>{'};'}<Cursor /></Line>
      </Lines>
    </div>
  )
}

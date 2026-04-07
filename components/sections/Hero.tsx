import { Fragment } from 'react'
import { skillCategories } from '@/lib/data'
import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, K, B, V, S, F } from '@/components/ui/syntax'
import { splitLines } from '@/lib/utils'

const activities = [
  { label: 'GitHub', href: 'https://github.com/GiovanySievert' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/giovanysievert' }
]

export function Hero() {
  return (
    <div className="bg-editor-bg font-mono text-sm text-syntax-plain py-2">
      <Lines>
        <Line>
          <C>{"// HI, I'M GIOVANY SIEVERT"}</C>
        </Line>
        <Line />

        <Line>
          <K>import </K>
          <S>&apos;./professional.styles.scss&apos;</S>
          <span>;</span>
        </Line>
        <Line />
        <Line className="select-none text-zinc-600">. . . .</Line>
        <Line />
        <Line>
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
        </Line>
        <Line>
          <B>const </B>
          <V>location </V>
          <span>{'= [ '}</span>
          <S>&apos;Brazil&apos;</S>
          <span>, </span>
          <S>&apos;Willing to work remotely&apos;</S>
          <span>{' ];'}</span>
        </Line>
        <Line />
        <Line>
          <B>const </B>
          <F>Professional </F>
          <span>{'= ({ '}</span>
          <V>skills </V>
          <span>{'}) => {'}</span>
        </Line>
        <Line indent={2}>
          <K>return </K>
          <span>(</span>
        </Line>
        <Line indent={4}>
          <C>{'{/* ABOUT */}'}</C>
        </Line>
        {splitLines('Full Stack Developer with 6+ years of experience, focused on frontend with React and React Native. Currently Tech Lead at Medprev, leading the mobile app team and driving technical decisions.').map((line, i) => (
          <Line key={`about1-${i}`} indent={4}>{line}</Line>
        ))}
        <Line />
        {splitLines('Strong teamwork skills — I enjoy keeping everyone aligned across designers, QA, and infrastructure teams. Experienced with TypeScript, Node.js, NestJS, Vue, Bun, Elasticsearch, and Jest.').map((line, i) => (
          <Line key={`about2-${i}`} indent={4}>{line}</Line>
        ))}
        <Line />
        <Line indent={4}>
          <C>{'{/* SKILLS */}'}</C>
        </Line>
        <Line indent={4}>{'{'}</Line>
        {skillCategories.map((cat) => {
          const key = cat.name.toLowerCase().replace(/ & /g, '').replace(/\s+/g, '')
          return (
            <Fragment key={cat.name}>
              <Line indent={6}>
                <V>{key}</V>
                <span>: [</span>
              </Line>
              <Line indent={8}>{cat.skills.join(', ')}</Line>
              <Line indent={6}>];</Line>
            </Fragment>
          )
        })}
        <Line indent={4}>{'}'}</Line>
        <Line />
        <Line indent={4}>
          <C>{'{/* ACTIVITIES */}'}</C>
        </Line>
        {activities.map((act) => (
          <Line key={act.label} indent={4}>
            <span className="text-zinc-500">. . .</span>
            <span> </span>
            <a href={act.href} className="text-syntax-teal hover:underline">
              {act.label}
            </a>
          </Line>
        ))}
        <Line indent={2}>)</Line>
        <Line>
          {'}'}
          <Cursor />
        </Line>
      </Lines>
    </div>
  )
}

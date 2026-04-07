import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, B, V, S } from '@/components/ui/syntax'

export function Personal() {
  return (
    <div id="personal" className="bg-editor-bg font-mono text-sm text-syntax-plain py-2">
      <Lines>
        <Line><C>{'// OUTSIDE THE CODE'}</C></Line>
        <Line />
        <Line><B>const </B><V>me </V><span>= {'{'}</span></Line>
        <Line indent={2}>
          <V>currently</V><span>: </span><S>&apos;probably exploring a new café or at the gym&apos;</S><span>,</span>
        </Line>
        <Line />
        <Line indent={2}><V>hobbies</V><span>: [</span></Line>
        <Line indent={4}><S>&apos;Counter-Strike with friends&apos;</S><span>,</span></Line>
        <Line indent={4}><S>&apos;gym&apos;</S><span>,</span></Line>
        <Line indent={4}><S>&apos;running&apos;</S><span>,</span></Line>
        <Line indent={4}><S>&apos;exploring new cafes &amp; parks&apos;</S><span>,</span></Line>
        <Line indent={4}><S>&apos;beach days&apos;</S><span>,</span></Line>
        <Line indent={4}><S>&apos;reading&apos;</S><span>,</span></Line>
        <Line indent={2}>]<span>,</span></Line>
        <Line />
        <Line indent={2}><V>music</V><span>: {'{'}</span></Line>
        <Line indent={4}><V>genres</V><span>: [</span><S>&apos;MPB&apos;</S><span>, </span><S>&apos;everything really&apos;</S><span>],</span></Line>
        <Line indent={4}><V>mood</V><span>: </span><S>&apos;always playing something&apos;</S><span>,</span></Line>
        <Line indent={2}>{'}'}<span>,</span></Line>
        <Line />
        <Line indent={2}>
          <V>location</V><span>: </span><S>&apos;Curitiba, Brazil&apos;</S><span>,</span>
        </Line>
        <Line indent={2}>
          <V>openTo</V><span>: [</span><S>&apos;remote work&apos;</S><span>, </span><S>&apos;good coffee&apos;</S><span>, </span><S>&apos;new friends&apos;</S><span>],</span>
        </Line>
        <Line />
        <Line indent={2}><V>stayingUpdated</V><span>: {'{'}</span></Line>
        <Line indent={4}><V>reading</V><span>: </span><S>&apos;tech books&apos;</S><span>,</span></Line>
        <Line indent={4}><V>watching</V><span>: </span><S>&apos;tech YouTube channels&apos;</S><span>,</span></Line>
        <Line indent={4}><V>listening</V><span>: </span><S>&apos;dev podcasts&apos;</S><span>,</span></Line>
        <Line indent={4}><V>scrolling</V><span>: </span><S>&apos;Twitter — not proud of it&apos;</S><span>,</span></Line>
        <Line indent={2}>{'}'}<span>,</span></Line>
        <Line>{'};'}<Cursor /></Line>
      </Lines>
    </div>
  )
}

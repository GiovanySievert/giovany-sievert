import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, K, B, V, T, F } from '@/components/ui/syntax'

const contacts = [
  { key: 'email', value: 'giovanysievert@gmail.com', href: 'mailto:giovanysievert@gmail.com' },
  { key: 'linkedin', value: 'linkedin.com/in/giovanysievert', href: 'https://www.linkedin.com/in/giovanysievert' },
  { key: 'github', value: 'github.com/GiovanySievert', href: 'https://github.com/GiovanySievert' },
]

export function Contact() {
  return (
    <div id="contact" className="bg-editor-bg font-mono text-sm text-syntax-plain py-2">
      <Lines>
        <Line><C>{'// CONTACT'}</C></Line>
        <Line />
        <Line><C>{'/**'}</C></Line>
        <Line indent={1}><C>* Open to new opportunities and collaborations.</C></Line>
        <Line indent={1}><C>* Feel free to reach out — let&apos;s build something great together.</C></Line>
        <Line><C>{' */'}</C></Line>
        <Line />
        <Line><B>const </B><V>links </V><span>= {'{'}</span></Line>
        {contacts.map((c) => (
          <Line key={c.key} indent={2}>
            <V>{c.key}</V>
            <span>: </span>
            <T>
              <a href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="hover:underline">
                &apos;{c.value}&apos;
              </a>
            </T>
            <span>,</span>
          </Line>
        ))}
        <Line>{'};'}</Line>
        <Line />
        <Line>
          <K>async function </K><F>sendMessage</F>
          <span>{'('}</span><V>data</V><span>: </span><B>ContactData</B><span>{'): '}</span>
          <K>Promise</K><span>{'<'}</span><B>void</B><span>{'> {'}</span>
        </Line>
        <Line indent={2}><K>await </K><F>email</F><span>.send({'({'}</span></Line>
        <Line indent={4}><V>to</V><span>: </span><T>&apos;giovanysievert@gmail.com&apos;</T><span>,</span></Line>
        <Line indent={4}><span>...</span><V>data</V><span>,</span></Line>
        <Line indent={2}>{'});'}</Line>
        <Line>{'}'}</Line>
        <Line />
        <Line>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:giovanysievert@gmail.com"
              className="border border-syntax-type px-4 py-1.5 text-syntax-type hover:bg-syntax-type/10 transition-colors"
            >
              <span className="text-syntax-keyword">new </span>
              <span className="text-syntax-function">Email</span>
              <span>()</span>
            </a>
            <a
              href="https://www.linkedin.com/in/giovanysievert"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-syntax-teal px-4 py-1.5 text-syntax-teal hover:bg-syntax-teal/10 transition-colors"
            >
              <span className="text-syntax-keyword">open </span>
              <span className="text-syntax-function">LinkedIn</span>
              <span>()</span>
            </a>
          </div>
        </Line>
        <Line><Cursor /></Line>
      </Lines>
    </div>
  )
}

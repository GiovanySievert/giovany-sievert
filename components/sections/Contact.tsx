import { Cursor } from '@/components/ui/Cursor'
import { C, K, B, V, T, F } from '@/components/ui/syntax'

const contacts = [
  { key: 'email', value: 'giovanysievert@gmail.com', href: 'mailto:giovanysievert@gmail.com' },
  { key: 'linkedin', value: 'linkedin.com/in/giovanysievert', href: 'https://www.linkedin.com/in/giovanysievert' },
  { key: 'github', value: 'github.com/GiovanySievert', href: 'https://github.com/GiovanySievert' },
]

export function Contact() {
  return (
    <div id="contact" className="min-h-full bg-editor-bg font-mono text-sm leading-6 p-10 text-syntax-plain">
      <p className="text-syntax-comment text-base font-bold tracking-widest mb-6">// CONTACT</p>

      <div className="mb-8 space-y-0.5">
        <p><C>{'/**'}</C></p>
        <p className="pl-4"><C>* Open to new opportunities and collaborations.</C></p>
        <p className="pl-4"><C>* Feel free to reach out — let&apos;s build something great together.</C></p>
        <p><C>{' */'}</C></p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="mb-8 space-y-0.5">
        <p>
          <B>const </B>
          <V>links </V>
          <span>= {'{'}</span>
        </p>
        <div className="pl-8 space-y-0.5">
          {contacts.map((c) => (
            <p key={c.key}>
              <V>{c.key}</V>
              <span>: </span>
              <T>
                <a href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="hover:underline">
                  &apos;{c.value}&apos;
                </a>
              </T>
              <span>,</span>
            </p>
          ))}
        </div>
        <p>{'};'}</p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="space-y-0.5">
        <p>
          <K>async function </K>
          <F>sendMessage</F>
          <span>{'('}</span>
          <V>data</V>
          <span>: </span>
          <B>ContactData</B>
          <span>{'): '}</span>
          <K>Promise</K>
          <span>{'<'}</span>
          <B>void</B>
          <span>{'> {'}</span>
        </p>
        <p className="pl-8">
          <K>await </K>
          <F>email</F>
          <span>.send({'({'}</span>
        </p>
        <div className="pl-16 space-y-0.5">
          <p><V>to</V><span>: </span><T>&apos;giovanysievert@gmail.com&apos;</T><span>,</span></p>
          <p><span>...</span><V>data</V><span>,</span></p>
        </div>
        <p className="pl-8">{'});'}</p>
        <p>{'}'}</p>

        <div className="mt-6 flex flex-wrap gap-4">
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
        <p className="mt-6"><Cursor /></p>
      </div>
    </div>
  )
}

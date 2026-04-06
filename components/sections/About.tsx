import { Cursor } from '@/components/ui/Cursor'
import { C, K, B, V, S, N } from '@/components/ui/syntax'

const experience = [
  {
    company: "Medprev",
    role: "Tech Lead",
    period: "2025 - Present",
    about:
      "Main developer of the React Native app and responsible for a web project, while leading the mobile engineering team. Owns architecture decisions, defines standards, mentors developers, and aligns cross-functional teams — Product, Design, QA, and Infra — to deliver reliable releases at scale.",
  },
  {
    company: "Medprev",
    role: "FullStack Developer",
    period: "2022 - 2025",
    about:
      "Developed and maintained features across the React Native mobile app and web platform (Vue.js). Worked on REST API integrations, performance improvements, and internal tooling. Collaborated closely with QA and Product to ship consistent, high-quality releases across multiple company products.",
  },
  {
    company: "Cargon",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    about:
      "Built and maintained the core platform of a logistics startup connecting truckers, freight companies, and shippers. Worked across the full stack using React, React Native, Node.js (AdonisJS), and SQL Server, following GitFlow and Scrum within an Azure DevOps workflow.",
  },
]

const education = [
  { institution: 'PUC Paraná', degree: 'Computer Systems Analysis', period: '2018 - 2020' },
  { institution: 'Alura', degree: 'Front-end Engineer', period: '2018 - 2019' }
]

export function About() {
  return (
    <div id="about" className="min-h-full bg-editor-bg font-mono text-sm leading-6 p-10 text-syntax-plain">
      <p className="text-syntax-comment text-base font-bold tracking-widest mb-6">// ABOUT ME</p>

      <div className="mb-8 space-y-0.5">
        <p>
          <B>const </B>
          <V>developer </V>
          <span>= {'{'}</span>
        </p>
        <div className="pl-8 space-y-0.5">
          <p>
            <V>name</V>
            <span>: </span>
            <S>&apos;Giovany Sievert&apos;</S>
            <span>,</span>
          </p>
          <p>
            <V>role</V>
            <span>: </span>
            <S>&apos;Senior Software Engineer&apos;</S>
            <span>,</span>
          </p>
          <p>
            <V>location</V>
            <span>: </span>
            <S>&apos;Curitiba, Brazil&apos;</S>
            <span>,</span>
          </p>
          <p>
            <V>experience</V>
            <span>: </span>
            <S>&apos;6+ years&apos;</S>
            <span>,</span>
          </p>
          <p>
            <V>focus</V>
            <span>: </span>
            <S>&apos;Frontend — React &amp; React Native&apos;</S>
            <span>,</span>
          </p>
          <p>
            <V>languages</V>
            <span>: [</span>
            <S>&apos;English&apos;</S>
            <span>, </span>
            <S>&apos;Portuguese&apos;</S>
            <span>],</span>
          </p>
        </div>
        <p>{'};'}</p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="mb-8 space-y-0.5">
        <p>
          <C>{'/**'}</C>
        </p>
        <p className="pl-4">
          <C>* Full Stack Developer with 6+ years of experience, focused on</C>
        </p>
        <p className="pl-4">
          <C>* frontend development with React and React Native. Currently</C>
        </p>
        <p className="pl-4">
          <C>* Tech Lead at Medprev, driving technical decisions and mentoring</C>
        </p>
        <p className="pl-4">
          <C>* developers across mobile and web products.</C>
        </p>
        <p className="pl-4">
          <C>*</C>
        </p>
        <p className="pl-4">
          <C>* Strong communicator — keeping designers, QA, and infra aligned</C>
        </p>
        <p className="pl-4">
          <C>* is something I genuinely enjoy and consider a core strength.</C>
        </p>
        <p>
          <C>{' */'}</C>
        </p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="mb-8 space-y-0.5">
        <p>
          <B>const </B>
          <V>experience</V>
          <span>: </span>
          <B>Experience</B>
          <span>[] = [</span>
        </p>
        <div className="pl-8 space-y-3">
          {experience.map((item) => (
            <div key={item.company + item.role} className="space-y-0.5">
              <p>{'{'}</p>
              <div className="pl-8 space-y-0.5">
                <p>
                  <V>company</V>
                  <span>: </span>
                  <S>&apos;{item.company}&apos;</S>
                  <span>,</span>
                </p>
                <p>
                  <V>role</V>
                  <span>: </span>
                  <S>&apos;{item.role}&apos;</S>
                  <span>,</span>
                </p>
                <p>
                  <V>period</V>
                  <span>: </span>
                  <S>&apos;{item.period}&apos;</S>
                  <span>,</span>
                </p>
                <p>
                  <V>about</V>
                  <span>: </span>
                  <S>&apos;{item.about}&apos;</S>
                  <span>,</span>
                </p>
              </div>
              <p>
                {'}'}
                <span className="text-editor-gutter">,</span>
              </p>
            </div>
          ))}
        </div>
        <p>];</p>
      </div>

      <div className="mb-8 border-t border-dashed border-zinc-700" />

      <div className="space-y-0.5">
        <p>
          <B>const </B>
          <V>education</V>
          <span>: </span>
          <B>Education</B>
          <span>[] = [</span>
        </p>
        <div className="pl-8 space-y-3">
          {education.map((item) => (
            <div key={item.institution} className="space-y-0.5">
              <p>{'{'}</p>
              <div className="pl-8 space-y-0.5">
                <p>
                  <V>institution</V>
                  <span>: </span>
                  <S>&apos;{item.institution}&apos;</S>
                  <span>,</span>
                </p>
                <p>
                  <V>degree</V>
                  <span>: </span>
                  <S>&apos;{item.degree}&apos;</S>
                  <span>,</span>
                </p>
                <p>
                  <V>period</V>
                  <span>: </span>
                  <N>{item.period}</N>
                  <span>,</span>
                </p>
              </div>
              <p>
                {'}'}
                <span className="text-editor-gutter">,</span>
              </p>
            </div>
          ))}
        </div>
        <p>
          ];
          <Cursor />
        </p>
      </div>
    </div>
  )
}

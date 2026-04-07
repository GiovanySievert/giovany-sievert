import { Fragment } from 'react'
import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, B, V, S, N } from '@/components/ui/syntax'
import { splitLines } from '@/lib/utils'

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
    <div id="about" className="bg-editor-bg font-mono text-sm text-syntax-plain py-2">
      <Lines>
        <Line>
          <C>{'// ABOUT ME'}</C>
        </Line>
        <Line />
        <Line>
          <B>const </B>
          <V>developer </V>
          <span>= {'{'}</span>
        </Line>
        <Line indent={2}>
          <V>name</V>
          <span>: </span>
          <S>&apos;Giovany Sievert&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>role</V>
          <span>: </span>
          <S>&apos;Senior Software Engineer&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>location</V>
          <span>: </span>
          <S>&apos;Curitiba, Brazil&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>experience</V>
          <span>: </span>
          <S>&apos;6+ years&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>focus</V>
          <span>: </span>
          <S>&apos;Frontend — React &amp; React Native&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>languages</V>
          <span>: [</span>
          <S>&apos;English&apos;</S>
          <span>, </span>
          <S>&apos;Portuguese&apos;</S>
          <span>],</span>
        </Line>
        <Line indent={2}>
          <V>email</V>
          <span>: </span>
          <S><a href="mailto:giovanysievert@gmail.com" className="hover:underline">&apos;giovanysievert@gmail.com&apos;</a></S>
          <span>,</span>
        </Line>
        <Line>{'};'}</Line>
        <Line />
        <Line>
          <C>{'/**'}</C>
        </Line>
        <Line indent={1}>
          <C>* Full Stack Developer with 6+ years of experience, focused on</C>
        </Line>
        <Line indent={1}>
          <C>* frontend development with React and React Native. Currently</C>
        </Line>
        <Line indent={1}>
          <C>* Tech Lead at Medprev, driving technical decisions and mentoring</C>
        </Line>
        <Line indent={1}>
          <C>* developers across mobile and web products.</C>
        </Line>
        <Line indent={1}>
          <C>*</C>
        </Line>
        <Line indent={1}>
          <C>* Strong communicator — keeping designers, QA, and infra aligned</C>
        </Line>
        <Line indent={1}>
          <C>* is something I genuinely enjoy and consider a core strength.</C>
        </Line>
        <Line>
          <C>{' */'}</C>
        </Line>
        <Line />
        <Line>
          <B>const </B>
          <V>experience</V>
          <span>: </span>
          <B>Experience</B>
          <span>[] = [</span>
        </Line>
        {experience.map((item) => (
          <Fragment key={item.company + item.role}>
            <Line indent={2}>{'{'}</Line>
            <Line indent={4}>
              <V>company</V>
              <span>: </span>
              <S>&apos;{item.company}&apos;</S>
              <span>,</span>
            </Line>
            <Line indent={4}>
              <V>role</V>
              <span>: </span>
              <S>&apos;{item.role}&apos;</S>
              <span>,</span>
            </Line>
            <Line indent={4}>
              <V>period</V>
              <span>: </span>
              <S>&apos;{item.period}&apos;</S>
              <span>,</span>
            </Line>
            {splitLines(item.about).map((line, i, arr) => (
              <Line key={i} indent={4}>
                {i === 0 && <><V>about</V><span>: </span><S>&apos;</S></>}
                <S>{line}</S>
                {i === arr.length - 1 && <><S>&apos;</S><span>,</span></>}
              </Line>
            ))}
            <Line indent={2}>
              {'}'}
              <span className="text-editor-gutter">,</span>
            </Line>
          </Fragment>
        ))}
        <Line>];</Line>
        <Line />
        <Line>
          <B>const </B>
          <V>education</V>
          <span>: </span>
          <B>Education</B>
          <span>[] = [</span>
        </Line>
        {education.map((item) => (
          <Fragment key={item.institution}>
            <Line indent={2}>{'{'}</Line>
            <Line indent={4}>
              <V>institution</V>
              <span>: </span>
              <S>&apos;{item.institution}&apos;</S>
              <span>,</span>
            </Line>
            <Line indent={4}>
              <V>degree</V>
              <span>: </span>
              <S>&apos;{item.degree}&apos;</S>
              <span>,</span>
            </Line>
            <Line indent={4}>
              <V>period</V>
              <span>: </span>
              <N>{item.period}</N>
              <span>,</span>
            </Line>
            <Line indent={2}>
              {'}'}
              <span className="text-editor-gutter">,</span>
            </Line>
          </Fragment>
        ))}
        <Line cursorLine>
          ];
          <Cursor />
        </Line>
      </Lines>
    </div>
  )
}

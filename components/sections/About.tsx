import { Fragment } from 'react'
import { Cursor } from '@/components/ui/Cursor'
import { Lines, Line } from '@/components/ui/Line'
import { C, B, V, S, N } from '@/components/ui/syntax'
import { splitLines } from '@/lib/utils'

const experience = [
  {
    company: "Medprev",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    about:
      "Core developer of the React Native app (TypeScript) used by 50k+ active users and serving 1M+ requests per day. Shipped iOS and Android features including authentication, favorites, notifications, and location-based experiences, and raised the app store rating from 2.3 to 4.9 through bug fixing, performance refactors, and UX work. Built backend services with NestJS and Elasticsearch powering 5k+ appointments booked monthly, backed by AWS (CloudWatch, RDS, S3), Azure DevOps pipelines, and automated tests with Playwright and Jest.",
  },
  {
    company: "Cargon",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    about:
      "Built and maintained the core platform of a freight marketplace connecting shippers and truck drivers across Brazil. Worked across the full stack with React, React Native, and Node.js (AdonisJS), building APIs with authentication, business rules, and integrations with internal logistics services, plus Jest tests covering critical flows like load matching, driver assignment, and delivery tracking.",
  },
]

const education = [
  { institution: 'PUC-PR', degree: 'Systems Analysis and Development', period: '2020 - 2021' },
  { institution: 'Rocketseat', degree: 'Full-Stack Web & Mobile Bootcamp', period: '2019 - 2020' }
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
          <S>&apos;Senior Full-Stack Developer&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>location</V>
          <span>: </span>
          <S>&apos;Curitiba, PR, Brazil&apos;</S>
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
          <S>&apos;Web &amp; mobile — React, React Native, Node.js&apos;</S>
          <span>,</span>
        </Line>
        <Line indent={2}>
          <V>languages</V>
          <span>: [</span>
          <S>&apos;Portuguese&apos;</S>
          <span>, </span>
          <S>&apos;English (C1)&apos;</S>
          <span>, </span>
          <S>&apos;Spanish (basic)&apos;</S>
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
          <C>* Senior Full-Stack Developer with 6+ years of experience building</C>
        </Line>
        <Line indent={1}>
          <C>* web and mobile products with React Native, React, Node.js,</C>
        </Line>
        <Line indent={1}>
          <C>* TypeScript, and AWS. Hands-on individual contributor focused on</C>
        </Line>
        <Line indent={1}>
          <C>* shipping scalable applications, improving performance and</C>
        </Line>
        <Line indent={1}>
          <C>* reliability, and delivering iOS and Android features used by</C>
        </Line>
        <Line indent={1}>
          <C>* 50k+ active users and supporting 1M+ daily requests.</C>
        </Line>
        <Line indent={1}>
          <C>*</C>
        </Line>
        <Line indent={1}>
          <C>* Experienced with CI/CD, automated testing, Domain-Driven Design,</C>
        </Line>
        <Line indent={1}>
          <C>* Hexagonal Architecture, and AI-assisted development. I enjoy</C>
        </Line>
        <Line indent={1}>
          <C>* collaborating with product, design, and engineering teams.</C>
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

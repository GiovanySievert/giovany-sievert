import { FaPhone, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiStackoverflow, SiUpwork } from 'react-icons/si'
import type { IconType } from 'react-icons'

const links: { icon: IconType; href: string; label: string }[] = [
  { icon: FaEnvelope, href: 'mailto:giovanysievert@gmail.com', label: 'E-mail' },
  { icon: FaGithub, href: 'https://github.com/GiovanySievert', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/giovanysievert', label: 'LinkedIn' }
]

export function ContactSideBar() {
  return (
    <aside className="flex h-full w-12 flex-col items-center gap-5 bg-activity-bg pt-5">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="text-activity-icon transition-colors hover:text-white"
        >
          <Icon size={24} />
        </a>
      ))}
    </aside>
  )
}

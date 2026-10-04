import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolioData'

/** Social icon row. Icons without a URL in portfolioData.js are hidden. */
export default function SocialLinks({ className = '' }) {
  const items = [
    { label: 'LinkedIn', href: personal.linkedin, Icon: Linkedin, external: true },
    { label: 'GitHub', href: personal.github, Icon: Github, external: true },
    { label: 'Email', href: personal.email ? `mailto:${personal.email}` : '', Icon: Mail },
  ].filter((i) => i.href)

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-white"
          >
            <Icon size={19} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}

import { achievements, certifications } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import { getIcon } from './icons'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <SectionHeading title="Certifications & achievements" />

      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => {
          const Icon = getIcon(c.icon)
          return (
            <Reveal key={c.title} delay={(i % 2) * 90} className="glass glass-hover flex gap-4 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-violet-200">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{c.issuer}</p>
                <p className="mt-0.5 text-sm text-slate-400">{c.date}</p>
                <span className="tag mt-3">{c.note}</span>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-10">
        <h3 className="mb-4 text-lg font-semibold">Achievements</h3>
        <ul className="flex flex-wrap gap-3">
          {achievements.map((a) => {
            const Icon = getIcon(a.icon)
            return (
              <li key={a.title} className="glass flex items-center gap-3 px-5 py-3">
                <Icon size={18} className="text-violet-300" aria-hidden="true" />
                <span className="font-semibold text-white">{a.title}</span>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}

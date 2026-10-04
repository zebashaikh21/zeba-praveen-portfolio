import { about } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import { getIcon } from './icons'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading title="About me" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.highlights.map(({ icon, label, value }) => {
            const Icon = getIcon(icon)
            return (
              <div key={label} className="glass flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="font-semibold text-white">{value}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

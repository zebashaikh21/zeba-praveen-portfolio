import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading title="Education" />
      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {education.map((e, i) => (
          <Reveal as="li" key={e.degree} delay={i * 80} className="relative pb-8 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[17px] top-1 grid h-8 w-8 place-items-center rounded-full border border-blue-400/40 bg-ink-800 text-blue-300"
            >
              <GraduationCap size={15} />
            </span>
            <div className="glass glass-hover flex flex-wrap items-start justify-between gap-4 p-6">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{e.degree}</h3>
                <p className="mt-1 font-medium text-slate-200">{e.institution}</p>
                <p className="text-sm text-slate-400">{e.place}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-slate-400">{e.years}</p>
                <p className="mt-1 inline-block rounded-full bg-gradient-to-r from-violet-500/20 to-blue-500/20 px-3 py-1 text-sm font-semibold text-white">
                  {e.result}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

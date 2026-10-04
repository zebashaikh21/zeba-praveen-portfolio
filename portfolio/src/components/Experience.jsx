import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        title="Internship & experience"
        subtitle="Practical, hands-on learning outside the classroom."
      />
      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {experience.map((item, i) => (
          <Reveal as="li" key={item.organization} delay={i * 100} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[17px] top-1 grid h-8 w-8 place-items-center rounded-full border border-violet-400/40 bg-ink-800 text-violet-300"
            >
              <Briefcase size={15} />
            </span>
            <div className="glass glass-hover p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="font-medium text-violet-300">{item.organization}</p>
                </div>
                <p className="text-sm text-slate-400">{item.duration}</p>
              </div>
              <span className="tag mt-3">{item.type}</span>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              {item.points.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-slate-300">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

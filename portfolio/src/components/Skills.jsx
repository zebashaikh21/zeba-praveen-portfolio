import { skillGroups, softSkills } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import { getIcon } from './icons'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        title="Technical skills"
        subtitle="The languages, frameworks and tools I work with, grouped by what I use them for."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = getIcon(group.icon)
          return (
            <Reveal key={group.title} delay={(i % 3) * 80} className="glass glass-hover p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-blue-500/25 text-violet-200">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="glass mt-5 p-6">
        <h3 className="mb-4 text-base font-semibold">Working style</h3>
        <ul className="flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

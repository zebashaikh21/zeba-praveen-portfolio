import { useCallback, useState } from 'react'
import { Eye, Github } from 'lucide-react'
import { projects } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import { getIcon } from './icons'
import ProjectModal from './ProjectModal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        title="Projects"
        subtitle="Things I've built while learning. Open any project for its full feature list."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const Icon = getIcon(p.icon)
          return (
            <Reveal
              as="article"
              key={p.id}
              delay={i * 90}
              className="glass glass-hover group flex flex-col overflow-hidden hover:-translate-y-1"
            >
              <div className={`relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <Icon
                    size={54}
                    className="text-white/90 transition duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                )}
                <span className="absolute left-3 top-3 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.slice(0, 2).map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate-300">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                      <span className="line-clamp-2">{f}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li key={t} className="tag !px-2.5 !py-0.5">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <button type="button" onClick={() => setSelected(p)} className="btn-primary !px-4 !py-2.5">
                    <Eye size={16} aria-hidden="true" /> View Project
                  </button>
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5">
                      <Github size={16} aria-hidden="true" /> GitHub Repository
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      title="Add this project's repository URL in src/data/portfolioData.js"
                      className="btn-ghost !px-4 !py-2.5 cursor-not-allowed opacity-50 hover:!translate-y-0"
                    >
                      <Github size={16} aria-hidden="true" /> Repo soon
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {selected && <ProjectModal project={selected} onClose={close} />}
    </section>
  )
}

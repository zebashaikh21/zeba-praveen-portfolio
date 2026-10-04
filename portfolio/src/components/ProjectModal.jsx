import { useEffect, useRef } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import { getIcon } from './icons'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const Icon = getIcon(project.icon)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      // Keep keyboard focus inside the dialog
      if (e.key === 'Tab') {
        const nodes = document.querySelectorAll('#project-dialog a[href], #project-dialog button:not([disabled])')
        if (!nodes.length) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink-950/80 p-4 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        id="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-ink-800 shadow-2xl animate-rise"
      >
        <div className={`relative grid h-40 place-items-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
          {project.image ? (
            <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover" />
          ) : (
            <Icon size={56} className="text-white/90" aria-hidden="true" />
          )}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-ink-900/70 text-white backdrop-blur hover:bg-ink-900"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="tag mb-3">{project.status}</span>
          <h3 id="project-dialog-title" className="text-2xl font-bold">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-slate-300">{project.description}</p>

          <h4 className="mt-6 text-sm font-semibold">Key features</h4>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-sm font-semibold">Technologies</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live ? (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={16} aria-hidden="true" /> Live demo
              </a>
            ) : null}
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Github size={16} aria-hidden="true" /> GitHub Repository
              </a>
            ) : (
              <p className="text-sm text-slate-400">Repository link will be added soon.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

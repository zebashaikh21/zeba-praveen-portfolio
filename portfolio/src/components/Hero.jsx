import { ArrowDown, Download } from 'lucide-react'
import profileImg from '../assets/profile.jpg'
import { personal, roles } from '../data/portfolioData'
import { useTypewriter } from '../hooks/useTypewriter'
import SocialLinks from './SocialLinks'

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px] animate-drift" />
        <div className="absolute -right-20 top-40 h-[26rem] w-[26rem] rounded-full bg-blue-600/25 blur-[130px] animate-drift-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise">
          <p className="text-lg text-slate-400">Hi, I'm</p>
          <h1 className="mt-1 text-4xl font-bold leading-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-white via-violet-200 to-blue-300 bg-clip-text text-transparent">
              Zeba Praveen
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-slate-200 sm:text-xl">{personal.title}</p>

          <p className="mt-4 h-8 font-display text-lg text-violet-300 sm:text-xl" aria-live="off">
            <span className="sr-only">Roles: {roles.join(', ')}</span>
            <span aria-hidden="true">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 bg-violet-300 animate-caret" />
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{personal.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={personal.resumeFile} download={personal.resumeDownloadName} className="btn-ghost">
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/50 via-transparent to-blue-500/50 blur-xl" />
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-violet-400/60 to-blue-400/60 p-[2px]">
              <img
                src={profileImg}
                alt="Portrait of Zeba Praveen"
                width="473"
                height="480"
                className="aspect-[4/4.2] w-full rounded-[1.7rem] object-cover object-top"
                fetchpriority="high"
              />
            </div>
            <div className="glass absolute -bottom-5 -left-4 px-4 py-3 text-sm shadow-xl sm:-left-8">
              <p className="font-display font-semibold text-white">MCA, 2025 – Present</p>
              <p className="text-xs text-slate-400">Technocrats Institute of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

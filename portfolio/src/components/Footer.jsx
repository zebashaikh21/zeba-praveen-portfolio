import { ArrowUp } from 'lucide-react'
import { personal } from '../data/portfolioData'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">{personal.name}</p>
          <p className="mt-1 text-sm text-slate-400">Designed and developed with passion.</p>
          <p className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white transition hover:-translate-y-0.5"
          >
            <ArrowUp size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, personal } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // Glass background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  // Close the mobile menu with Escape; lock page scroll while it is open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = (href) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      active === href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink-900/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5 font-display text-base font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold">
            ZP
          </span>
          {personal.name}
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={linkClass(l.href)}
                aria-current={active === l.href.slice(1) ? 'page' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personal.resumeFile}
            download={personal.resumeDownloadName}
            className="btn-primary hidden !px-4 !py-2 sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block ${linkClass(l.href)} !py-3 text-base`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personal.resumeFile}
            download={personal.resumeDownloadName}
            className="btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
        </div>
      )}
    </header>
  )
}

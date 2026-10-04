import { useState } from 'react'
import { AlertCircle, CheckCircle2, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { personal } from '../data/portfolioData'
import { Reveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

const EMPTY = { name: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).'
  if (!v.email.trim()) e.email = 'Enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email, like name@example.com.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).'
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(null) // holds the validated values after a successful submit

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      // Move focus to the first invalid field
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      setSent(null)
      return
    }
    setSent(values)
    setValues(EMPTY)
  }

  const mailtoHref = sent
    ? `mailto:${personal.email}?subject=${encodeURIComponent(sent.subject)}&body=${encodeURIComponent(
        `${sent.message}\n\n— ${sent.name} (${sent.email})`
      )}`
    : `mailto:${personal.email}`

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </label>
      {props.rows ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `err-${name}` : undefined}
          className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/60 focus:outline-none"
          {...props}
        />
      ) : (
        <input
          id={`contact-${name}`}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `err-${name}` : undefined}
          className="w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/60 focus:outline-none"
          {...props}
        />
      )}
      {errors[name] && (
        <p id={`err-${name}`} className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-300">
          <AlertCircle size={14} aria-hidden="true" /> {errors[name]}
        </p>
      )}
    </div>
  )

  const contactItems = [
    { Icon: Mail, label: 'Email', text: personal.email, href: `mailto:${personal.email}` },
    { Icon: Linkedin, label: 'LinkedIn', text: 'linkedin.com/in/zebapraveen', href: personal.linkedin, external: true },
    personal.github && { Icon: Github, label: 'GitHub', text: personal.github.replace('https://', ''), href: personal.github, external: true },
    personal.location && { Icon: MapPin, label: 'Location', text: personal.location },
  ].filter(Boolean)

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        title="Get in touch"
        subtitle="I'm open to internships and entry-level opportunities. Send a message or reach out directly."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-4">
          {contactItems.map(({ Icon, label, text, href, external }) => {
            const inner = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-slate-400">{label}</span>
                  <span className="block truncate font-medium text-white">{text}</span>
                </span>
              </>
            )
            return href ? (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="glass glass-hover flex items-center gap-4 p-4"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="glass flex items-center gap-4 p-4">
                {inner}
              </div>
            )
          })}
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              {field('name', 'Name', { type: 'text', autoComplete: 'name', placeholder: 'Your name' })}
              {field('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
            </div>
            {field('subject', 'Subject', { type: 'text', placeholder: 'What is this about?' })}
            {field('message', 'Message', { rows: 5, placeholder: 'Write your message here' })}

            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} aria-hidden="true" /> Send message
            </button>

            <div aria-live="polite">
              {sent && (
                <div className="flex gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold">Message checked. It has not been sent yet.</p>
                    <p className="mt-1 text-emerald-100/80">
                      Because this is a frontend demo, click below to send it with your email app.
                    </p>
                    <a href={mailtoHref} className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4">
                      <Mail size={15} aria-hidden="true" /> Open email to {personal.email}
                    </a>
                  </div>
                </div>
              )}
              {Object.values(errors).some(Boolean) && (
                <p className="flex items-center gap-2 text-sm text-rose-300">
                  <AlertCircle size={16} aria-hidden="true" /> Please fix the highlighted fields and try again.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

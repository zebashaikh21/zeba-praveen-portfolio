export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </div>
  )
}

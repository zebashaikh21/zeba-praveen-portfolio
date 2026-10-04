import { useEffect, useState } from 'react'

/** Types and deletes each word in `words`, one after another. */
export function useTypewriter(words, { typeMs = 85, deleteMs = 45, pauseMs = 1400 } = {}) {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const word = words[index % words.length]
    let timer
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs
      )
    }
    return () => clearTimeout(timer)
  }, [text, deleting, index, words, reduce, typeMs, deleteMs, pauseMs])

  return reduce ? words[0] : text
}

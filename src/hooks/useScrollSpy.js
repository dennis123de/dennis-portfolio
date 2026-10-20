// src/hooks/useScrollSpy.js
import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0
    const updateActiveSection = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const position = window.scrollY + offset + window.innerHeight * 0.15
        let currentId = sectionIds[0] ?? ''

        for (const id of sectionIds) {
          const section = document.getElementById(id)
          if (section && section.offsetTop <= position) currentId = id
        }

        setActiveId(currentId)
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds, offset])

  return activeId
}

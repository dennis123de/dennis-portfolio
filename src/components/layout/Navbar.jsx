import { useEffect, useRef, useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['about', 'projects', 'skills', 'contact']

export function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const activeSection = useScrollSpy(SECTION_IDS, 88)

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    function closeOnOutsideClick(event) {
      if (
        !menuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [menuOpen])

  function renderLinks() {
    return NAV_LINKS.map(({ label, href }) => {
      const isActive = activeSection === href.slice(1)
      return (
        <li key={href}>
          <a
            className={`nav-link${isActive ? ' is-active' : ''}`}
            href={href}
            aria-current={isActive ? 'location' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        </li>
      )
    })
  }

  return (
    <header className="site-header">
      <div className="container navbar-inner">
        <a className="brand" href="#hero" onClick={() => setMenuOpen(false)} aria-label="Ajolaye Dennis, home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>Ajolaye Dennis</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">{renderLinks()}</ul>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></svg>
            )}
          </button>
          <a className="btn btn-primary nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          <button
            ref={menuButtonRef}
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav
        ref={menuRef}
        className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <ul className="nav-list">{renderLinks()}</ul>
      </nav>
    </header>
  )
}

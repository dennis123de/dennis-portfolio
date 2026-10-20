import { useEffect, useState } from 'react'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { SocialLinks } from '../ui/SocialLinks'

const roles = ['Full-Stack Developer', 'Product Designer', 'Backend Developer']

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length)
    }, 2800)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> Available for opportunities</p>
          <p className="hero-role" aria-live="polite">{roles[roleIndex]} <span aria-hidden="true">·</span> Lagos, Nigeria</p>
          <h1 id="hero-heading">I build digital<br /><span>things that matter.</span></h1>
          <p className="hero-intro">
            I&apos;m Ajolaye Dennis, a developer and designer in Lagos, Nigeria. I turn complex ideas into thoughtful, useful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary btn-large" href="#projects">View Projects <span aria-hidden="true">↗</span></a>
            <a className="btn btn-secondary btn-large" href="/Ajolaye-Dennis-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
            <a className="btn btn-secondary btn-large" href="#contact">Contact Me <span aria-hidden="true">→</span></a>
          </div>
          <SocialLinks className="hero-socials" />
        </div>

        <div className="hero-visual">
          <div className="hero-photo-ring"><ProfilePhoto /></div>
          <div className="hero-note hero-note-top"><span className="note-icon">✳</span><span>Thoughtful by design</span></div>
          <div className="hero-note hero-note-bottom"><span className="note-indicator" /><span>Based in Lagos, Nigeria</span></div>
          <div className="hero-orbit" aria-hidden="true" />
        </div>

        <div className="hero-stats" aria-label="Experience highlights">
          <div><strong>3<span>+</span></strong><small>Featured projects</small></div>
          <div><strong>2<span>+</span></strong><small>Years learning &amp; building</small></div>
          <div><strong>10<span>+</span></strong><small>Technologies in my toolkit</small></div>
        </div>
      </div>
    </section>
  )
}

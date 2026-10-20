import { Layers, MapPin } from 'lucide-react'
import { ProfilePhoto } from '../ui/ProfilePhoto'
import { Reveal } from '../ui/Reveal'

const milestones = [
  { date: 'The beginning', title: 'Curiosity became a craft', text: 'Started learning how websites work, then began building small ideas of my own.' },
  { date: 'Growing every day', title: 'From interfaces to APIs', text: 'Expanded into backend development and product design to understand the whole experience.' },
  { date: 'Today', title: 'Building with purpose', text: 'Collaborating on useful products, learning continuously, and bringing ideas to life.' },
]

const interests = [
  { icon: '</>', title: 'Thoughtful engineering', text: 'Accessible, maintainable applications that work well in the real world.' },
  { icon: '✳', title: 'Human-centred design', text: 'Clear interfaces shaped around the people who use them.' },
  { icon: '↗', title: 'Curious by default', text: 'Always exploring better tools, patterns, and ways to solve problems.' },
]

export function About() {
  return (
    <section id="about" className="section section-about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-heading about-section-heading">
          <p className="eyebrow">About me</p>
          <h2 id="about-heading" className="section-title">Who I Am</h2>
        </div>

        <div className="about-main">
          <Reveal className="about-portrait-wrap">
            <ProfilePhoto className="about-portrait" />
          </Reveal>
          <Reveal className="about-story" delay={100}>
            <h3 className="about-lead">I&apos;m Ajolaye Dennis, a full-stack developer and product designer who enjoys making complex things feel simple.</h3>
            <p>I care about the details behind a great digital experience: the structure that makes it reliable, the design that makes it intuitive, and the small decisions that make it feel human.</p>
            <p>Based in Lagos, I&apos;m growing my craft through collaboration and hands-on projects—from API architecture to polished, responsive interfaces.</p>

            <div className="facts-grid">
            <div className="fact">
              <span className="fact-icon"><MapPin size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <div><small>Based in</small><strong>Lagos, Nigeria</strong></div>
            </div>
            <div className="fact">
              <span className="fact-icon"><Layers size={22} strokeWidth={1.75} aria-hidden="true" /></span>
              <div><small>Focus areas</small><strong>Full-stack · Product design</strong></div>
            </div>
            </div>

          </Reveal>
        </div>

        <div className="journey">
          <div className="journey-heading"><p className="eyebrow">The journey</p><h3>Always moving forward.</h3></div>
          <ol className="timeline">
            {milestones.map(({ date, title, text }) => (
              <li key={title} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <p className="timeline-date">{date}</p><h4>{title}</h4><p>{text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="interests">
          <div className="interests-heading"><p className="eyebrow">How I work</p><h3>Interests &amp; approach</h3></div>
          <div className="interest-grid">
            {interests.map(({ icon, title, text }, index) => (
              <Reveal key={title} delay={index * 90}>
                <article className="interest-card">
                  <span className="interest-icon" aria-hidden="true">{icon}</span>
                  <h4>{title}</h4><p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

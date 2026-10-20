import { contactInfo } from '../../data/socials'
import { ContactForm } from '../ui/ContactForm'
import { Reveal } from '../ui/Reveal'
import { SocialLinks } from '../ui/SocialLinks'

export function Contact() {
  return (
    <section id="contact" className="section section-contact" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2 id="contact-heading" className="section-title">Let&apos;s make<br /><span>it happen.</span></h2>
          <p className="contact-intro">I&apos;m open to meaningful opportunities, collaborations, and conversations. Tell me what you&apos;re working on.</p>
          <a className="contact-email" href={`mailto:${contactInfo.email}`}>
            <span className="contact-icon" aria-hidden="true">✉</span>
            <span><small>Write me an email</small><strong>{contactInfo.email}</strong></span>
          </a>
          <div className="contact-location"><span className="contact-icon" aria-hidden="true">⌖</span><span><small>Based in</small><strong>{contactInfo.location}</strong></span></div>
          <div className="contact-socials">
            <p>Find me online</p>
            <SocialLinks className="contact-social-links" includeEmail />
          </div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={100}>
          <div className="contact-form-heading"><div><p className="eyebrow">Send a message</p><h3>Tell me about your project.</h3></div><span aria-hidden="true">↗</span></div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

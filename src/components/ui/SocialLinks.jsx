import { contactInfo, socials } from '../../data/socials'
import { SocialIcon } from './SocialIcon'

export function SocialLinks({ className = '', includeEmail = false }) {
  const links = socials
    .filter(({ id, url }) => (id === 'github' || id === 'linkedin') && url)
    .map((social) => ({ ...social, href: social.url }))

  if (includeEmail) {
    links.push({ id: 'email', label: 'Email', href: `mailto:${contactInfo.email}` })
  }

  return (
    <div className={`social-links ${className}`.trim()}>
      {links.map(({ id, label, href }) => (
        <a
          key={id}
          className="social-link"
          href={href}
          target={id === 'email' ? undefined : '_blank'}
          rel={id === 'email' ? undefined : 'noreferrer'}
          aria-label={id === 'email' ? 'Send me an email' : `Visit my ${label} profile`}
          title={label}
        >
          <SocialIcon id={id} />
        </a>
      ))}
    </div>
  )
}

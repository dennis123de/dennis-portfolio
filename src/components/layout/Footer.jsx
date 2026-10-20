import { SocialLinks } from '../ui/SocialLinks'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-identity">
          <a className="brand footer-brand" href="#hero"><span className="brand-mark" aria-hidden="true">A</span><span>Ajolaye Dennis</span></a>
          <p className="footer-tagline">Building thoughtful digital experiences.</p>
        </div>
        <nav aria-label="Footer navigation"><ul className="footer-links">{NAV_LINKS.map(({ label, href }) => <li key={href}><a href={href}>{label}</a></li>)}</ul></nav>
        <SocialLinks className="footer-social-links" includeEmail />
        <div className="footer-meta">
          <p>© {currentYear} Ajolaye Dennis</p>
          <a className="back-to-top" href="#hero">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  )
}

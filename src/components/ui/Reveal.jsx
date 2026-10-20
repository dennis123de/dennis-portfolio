import { useInView } from 'react-intersection-observer'

export function Reveal({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

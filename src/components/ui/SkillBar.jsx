import { useInView } from 'react-intersection-observer'

export function SkillBar({ name, level }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="skill-row">
      <div className="skill-meta">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar-track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency`}>
        <div
          className="skill-bar-fill"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

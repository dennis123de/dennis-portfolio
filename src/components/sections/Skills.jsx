import { skillGroups } from '../../data/skills'
import { SkillGroup } from '../ui/SkillGroup'
import { Reveal } from '../ui/Reveal'

export function Skills() {
  return (
    <section id="skills" className="section section-skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">The toolkit</p><h2 id="skills-heading" className="section-title">Skills I bring to the table.</h2></div>
          <p className="section-intro">A growing set of tools for building useful products from first sketch to final release.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 80}>
              <SkillGroup title={group.title} icon={group.icon} skills={group.skills} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

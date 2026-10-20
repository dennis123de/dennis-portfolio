import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'

export function Projects() {
  return (
    <section id="projects" className="section section-projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow">Selected work</p><h2 id="projects-heading" className="section-title">A few things I&apos;ve built.</h2></div>
          <p className="section-intro">A mix of independent and collaborative work, from intuitive interfaces to reliable backend systems.</p>
        </div>
        <ul className="project-grid" aria-label="Featured projects">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={index * 100}><ProjectCard project={project} /></Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

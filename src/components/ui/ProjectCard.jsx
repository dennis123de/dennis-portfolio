import { useState } from 'react'
import { TechTag } from './TechTag'

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7m0-7L10 14" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
}

function ArchitecturePreview() {
  return (
    <div className="architecture-preview" aria-label="Backend architecture illustration">
      <div className="architecture-label"><span /> API ARCHITECTURE</div>
      <div className="architecture-flow">
        <div className="architecture-node"><span className="architecture-node-icon">↗</span><strong>REST API</strong><small>Express.js</small></div>
        <span className="architecture-connector" aria-hidden="true">··········›</span>
        <div className="architecture-node architecture-node-accent"><span className="architecture-node-icon">{'{ }'}</span><strong>Service layer</strong><small>TypeScript</small></div>
        <span className="architecture-connector" aria-hidden="true">··········›</span>
        <div className="architecture-node"><span className="architecture-node-icon">◈</span><strong>Database</strong><small>PostgreSQL</small></div>
      </div>
      <div className="architecture-footer"><span>Prisma ORM</span><span className="architecture-status">● Connected</span></div>
    </div>
  )
}

function BrowserPreview({ project }) {
  const [imageSource, setImageSource] = useState('local')
  const [imageLoaded, setImageLoaded] = useState(false)
  const initials = project.title.split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase()
  let domain = 'Live preview'
  if (project.liveUrl) {
    try {
      domain = new URL(project.liveUrl).hostname.replace(/^www\./, '')
    } catch {
      domain = project.liveUrl
    }
  }

  const preview = (
    <>
      <div className="browser-chrome" aria-hidden="true">
        <span className="browser-dots"><i /><i /><i /></span>
        <span className="browser-address">{domain}</span>
        <span className="browser-lock">↗</span>
      </div>
      <div className="preview-viewport">
        {project.previewType === 'architecture' ? (
          <ArchitecturePreview />
        ) : imageSource === 'failed' ? (
          <div className={`preview-fallback preview-fallback-${project.slug}`} aria-label={`${project.title} preview unavailable`}>
            <span>{initials}</span>
          </div>
        ) : (
          <>
            {!imageLoaded && <div className="preview-skeleton" aria-hidden="true" />}
            <img
              className={`preview-image${imageLoaded ? '' : ' is-loading'}`}
              src={imageSource === 'local' ? project.image : `https://image.thum.io/get/width/1200/crop/900/${project.liveUrl}`}
              alt={`Website preview of ${project.title}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageLoaded(false)
                setImageSource((source) => source === 'local' ? 'api' : 'failed')
              }}
            />
          </>
        )}
      </div>
    </>
  )

  return (
    <div className="browser-frame">
      {project.liveUrl ? (
        <a className="browser-preview-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live website in a new tab`}>
          {preview}
        </a>
      ) : (
        <div className="browser-preview-link">{preview}</div>
      )}
    </div>
  )
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <BrowserPreview project={project} />
      <div className="project-content">
        <span className="role-badge">{project.role}</span>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech" aria-label="Technologies used">
          {project.tech.map((tech) => <TechTag key={tech} label={tech} />)}
        </div>
        <div className="project-actions">
          {project.liveUrl && <a className="btn btn-primary btn-small" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <ExternalIcon /></a>}
          {project.githubUrl && <a className="btn btn-secondary btn-small" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a>}
        </div>
      </div>
    </article>
  )
}

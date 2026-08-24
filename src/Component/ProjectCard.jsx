import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

function ProjectCard({
  image,
  title,
  category,
  description,
  technologies,
  highlights,
  liveDemo,
  github,
}) {
  return (
    <article className="project-card">
      <div className="project-image-wrapper">
        <img
          src={image}
          alt={`${title} interface`}
          className="project-image"
        />
      </div>

      <div className="project-card-content">
        <p className="project-category">{category}</p>

        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <p className="project-highlights">
          {highlights}
        </p>

        <div className="project-tech">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={liveDemo} target="_blank" rel="noreferrer">
            Live Demo
            <FiExternalLink aria-hidden="true" />
          </a>

          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
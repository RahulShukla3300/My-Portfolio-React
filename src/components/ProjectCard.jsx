import { FaGithub } from "react-icons/fa";
import { FiClock, FiCode, FiExternalLink } from "react-icons/fi";

function ProjectCard({
  image,
  title,
  category,
  description,
  technologies,
  highlights,
  liveDemo,
  github,
  status,
}) {
  const isInProgress = status === "live";

  return (
    <article className="project-card">
      <div
        className={`project-image-wrapper${image ? "" : " project-image-placeholder"}`}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} interface`}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="project-placeholder-icon" aria-hidden="true">
            {isInProgress ? <FiClock /> : <FiCode />}
          </span>
        )}

        <span className={`project-status${isInProgress ? " is-progress" : ""}`}>
          {status}
        </span>
      </div>

      <div className="project-card-content">
        <p className="project-category">{category}</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-highlights">{highlights}</p>

        <div className="project-tech" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {liveDemo ? (
            <a
              href={liveDemo}
              target="_blank"
              rel="noreferrer"
              className="project-link-primary"
              aria-label={`Open the ${title} live demo`}
            >
              Live Demo
              <FiExternalLink aria-hidden="true" />
            </a>
          ) : (
            <span className="project-link-disabled">
              <FiClock aria-hidden="true" />
              Completed
            </span>
          )}

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View the ${title} source code on GitHub`}
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

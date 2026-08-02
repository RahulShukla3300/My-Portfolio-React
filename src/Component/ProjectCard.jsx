function ProjectCard(props) {
  return (
    <div className="project-card">

       <img
       src={props.image}
        alt={props.title}
          className="project-image"
        />

      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <div className="project-tech">
        <span>{props.tech1}</span>
        <span>{props.tech2}</span>
        <span>{props.tech3}</span>
      </div>

      <div className="project-links">
        <a href={props.liveDemo} target="_blank" rel="noreferrer">
          Live Demo
        </a>

        <a href={props.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
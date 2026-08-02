function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <p>
        Here are some of the projects I have built while learning
        JavaScript and React.
      </p>

      <div className="projects-container">
        <div className="project-card">
          <h3>Guess the Number Game</h3>

          <p>
            A JavaScript game where the user tries to guess a randomly
            generated number within a limited number of attempts.
          </p>

          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank" rel="noreferrer">
              Live Demo
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
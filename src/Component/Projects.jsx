import ProjectCard from "./ProjectCard";


function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <p>
        Here are some of the projects I have built while learning
        JavaScript and React.
      </p>

      <div className="projects-container">
        <ProjectCard
          title="Guess the Number Game"
          description="A JavaScript game where the user tries to guess a randomly generated number within a limited number of attempts."
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          liveDemo="#"
          github="#"
        />

        <ProjectCard
        title="Bubble Game"
          description="A fun JavaScript game where players pop numbered bubbles before time runs out to score as many points as possible."
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          liveDemo="#"
          github="#"
        />
        
      </div>
    </section>
  )
}

export default Projects
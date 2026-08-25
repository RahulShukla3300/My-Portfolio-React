import ProjectCard from "./ProjectCard"

import bubbleImg from "../assets/projects/bubble.png"
import GuessNumberImg from "../assets/projects/GuessTheNum.png"

function Projects() {
  return (
    <section id="projects" className="selected-work">
      <div className="page-shell">
        <div className="projects-heading">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2>Projects built through practice and curiosity.</h2>
          </div>

          <p>
            Interactive JavaScript projects focused on browser events,
            application logic, timers, and responsive interfaces.
          </p>
        </div>

        <div className="projects-container">
          <ProjectCard
            image={GuessNumberImg}
            title="Guess the Number Game"
            category="JavaScript Game"
            description="An interactive browser game where the player attempts to identify a randomly generated number within a limited number of guesses."
            highlights="DOM events • Game state • Input validation"
            technologies={["HTML", "CSS", "JavaScript"]}
            liveDemo="https://rahulshukla3300.github.io/Learn-JavaScript-Practice-Project/Guess%20The%20Num/"
            github="https://github.com/RahulShukla3300/Learn-JavaScript-Practice-Project"
          />

          <ProjectCard
            image={bubbleImg}
            title="Bubble Game"
            category="JavaScript Game"
            description="A timed browser game where players identify and select matching numbered bubbles to increase their score."
            highlights="Timers • Scoring logic • Dynamic interactions"
            technologies={["HTML", "CSS", "JavaScript"]}
            liveDemo="https://rahulshukla3300.github.io/Learn-JavaScript-Practice-Project/Bubble%20Game/"
            github="https://github.com/RahulShukla3300/Learn-JavaScript-Practice-Project/tree/main/Bubble%20Game"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects

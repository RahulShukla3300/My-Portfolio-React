import ProjectCard from "./ProjectCard";

import GuessNumberImg from "../assets/Projects/GuessTheNum.png"
import bubbleImg from "../assets/Projects/bubble.png"


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
          image = {GuessNumberImg}
          title="Guess the Number Game"
          description="A JavaScript game where the user tries to guess a randomly generated number within a limited number of attempts."
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          liveDemo="https://rahulshukla3300.github.io/Learn-JavaScript-Practice-Project/Guess%20The%20Num/"
          github="https://github.com/RahulShukla3300/Learn-JavaScript-Practice-Project"
        />

        <ProjectCard
          image = {bubbleImg}
          title="Bubble Game"
          description="A fun JavaScript game where players pop numbered bubbles before time runs out to score as many points as possible."
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          liveDemo="#"
          liveDemo="https://rahulshukla3300.github.io/Learn-JavaScript-Practice-Project/Bubble%20Game/"
        />
        
      </div>
    </section>
  )
}

export default Projects
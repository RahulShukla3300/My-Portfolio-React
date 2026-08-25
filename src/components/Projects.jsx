import { useCallback, useEffect, useRef } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import ProjectCard from "./ProjectCard"

import bubbleImage from "../assets/Projects/bubble.png"
import guessNumberImage from "../assets/Projects/GuessTheNum.png"

const repositoryUrl =
  "https://github.com/RahulShukla3300/Learn-JavaScript-Practice-Project"
const pagesUrl =
  "https://rahulshukla3300.github.io/Learn-JavaScript-Practice-Project"
const rawImageUrl =
  "https://raw.githubusercontent.com/RahulShukla3300/Learn-JavaScript-Practice-Project/main"

const projects = [
  {
    title: "Developer Portfolio",
    category: "React Application",
    description:
      "A responsive personal portfolio presenting my experience, technical skills, selected work, and contact information.",
    highlights: "React components • Responsive CSS • Vite deployment",
    technologies: ["React", "CSS", "Vite"],
    liveDemo: "https://rahulshuklaportfolio.vercel.app/",
    github: "https://github.com/RahulShukla3300/My-Portfolio-React",
    status: "Completed",
  },
  {
    title: "BMI Calculator",
    category: "Health Utility",
    description:
      "Calculates body mass index from height and weight and displays the corresponding weight category.",
    highlights: "Input validation • Calculations • Conditionals",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: `${rawImageUrl}/bmi-calculator-screenshot.jpg`,
    liveDemo: `${pagesUrl}/BMI%20CALCULATOR/`,
    github: `${repositoryUrl}/tree/main/BMI%20CALCULATOR`,
    status: "Completed",
  },
  {
    title: "Bubble Game",
    category: "JavaScript Game",
    description:
      "A 60-second number-matching game with randomly generated bubbles, a target number, and score tracking.",
    highlights: "DOM generation • Events • Timers • Game logic",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: bubbleImage,
    liveDemo: `${pagesUrl}/Bubble%20Game/`,
    github: `${repositoryUrl}/tree/main/Bubble%20Game`,
    status: "Completed",
  },
  {
    title: "Calculator",
    category: "JavaScript Utility",
    description:
      "Performs basic calculations and includes clear, backspace, and calculation error-handling functionality.",
    highlights: "Event handling • String operations • Error handling",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: `${rawImageUrl}/calculator-screenshot.jpg`,
    liveDemo: `${pagesUrl}/CALCULATOR%20JS%2CCSS%2CHTML/`,
    github: `${repositoryUrl}/tree/main/CALCULATOR%20JS%2CCSS%2CHTML`,
    status: "Completed",
  },
  {
    title: "Color Switcher",
    category: "DOM Project",
    description:
      "Changes the page background instantly when a user selects one of the available color options.",
    highlights: "DOM selection • Click events • Style manipulation",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: `${rawImageUrl}/color-switcher-screenshot.jpg`,
    liveDemo: `${pagesUrl}/Color%20Switcher/`,
    github: `${repositoryUrl}/tree/main/Color%20Switcher`,
    status: "Completed",
  },
  {
    title: "Digital Clock",
    category: "JavaScript Utility",
    description:
      "Displays the current local time and refreshes the clock automatically every second.",
    highlights: "Date object • setInterval • DOM updates",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: `${rawImageUrl}/digital-clock-screenshot.jpg`,
    liveDemo: `${pagesUrl}/DIG%20CLOCK/`,
    github: `${repositoryUrl}/tree/main/DIG%20CLOCK`,
    status: "Completed",
  },
  {
    title: "Guess the Number Game",
    category: "JavaScript Game",
    description:
      "A number-guessing game from 1–100 with ten attempts, high or low hints, and restart functionality.",
    highlights: "Random numbers • Validation • Arrays • Game state",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: guessNumberImage,
    liveDemo: `${pagesUrl}/Guess%20The%20Num/`,
    github: `${repositoryUrl}/tree/main/Guess%20The%20Num`,
    status: "Completed",
  },
  {
    title: "Random Password Generator",
    category: "Security Utility",
    description:
      "Generates an eight-character random password and clears the generated value automatically after five seconds.",
    highlights: "Randomisation • Loops • Strings • setTimeout",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: `${rawImageUrl}/password-generator-screenshot.jpg`,
    liveDemo: `${pagesUrl}/Random%20Password%20Generator/Index.html`,
    github: `${repositoryUrl}/tree/main/Random%20Password%20Generator`,
    status: "Completed",
  },
  {
    title: "To-Do List",
    category: "Productivity App",
    description:
      "A task-management project for practising forms, dynamic list operations, and browser events.",
    highlights: "Forms • DOM manipulation • Events",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: `${repositoryUrl}/tree/main/To-Do%20List`,
    status: "In progress",
  },
  {
    title: "Weather App",
    category: "API Project",
    description:
      "A city-based weather application that validates user input and retrieves current conditions from an external API.",
    highlights: "User input • Fetch API • API integration",
    technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
    image: `${rawImageUrl}/weather-app-full-desktop.png`,
    liveDemo: `${pagesUrl}/Wheather%20API%20fetch/`,
    github: `${repositoryUrl}/tree/main/Wheather%20API%20fetch`,
    status: "Completed v1",
  },
]

function Projects() {
  const carouselRef = useRef(null)
  const autoplayPausedRef = useRef(false)

  const scrollProjects = useCallback((direction) => {
    const carousel = carouselRef.current

    if (!carousel) return

    const firstCard = carousel.querySelector(".project-card")

    if (!firstCard) return

    const carouselStyles = window.getComputedStyle(carousel)
    const gap = Number.parseFloat(carouselStyles.columnGap) || 0
    const scrollStep = firstCard.getBoundingClientRect().width + gap
    const maximumScroll = carousel.scrollWidth - carousel.clientWidth
    const isAtStart = carousel.scrollLeft <= 2
    const isAtEnd = carousel.scrollLeft >= maximumScroll - 2

    if (direction > 0 && isAtEnd) {
      carousel.scrollTo({ left: 0, behavior: "smooth" })
      return
    }

    if (direction < 0 && isAtStart) {
      carousel.scrollTo({ left: maximumScroll, behavior: "smooth" })
      return
    }

    carousel.scrollBy({ left: direction * scrollStep, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) return undefined

    const autoplayTimer = window.setInterval(() => {
      if (!autoplayPausedRef.current) scrollProjects(1)
    }, 5000)

    return () => window.clearInterval(autoplayTimer)
  }, [scrollProjects])

  const handleCarouselKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollProjects(-1)
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollProjects(1)
    }
  }

  return (
    <section id="projects" className="selected-work">
      <div className="page-shell">
        <div className="projects-heading">
          <div>
            <p className="section-kicker">GitHub projects</p>
            <h2>Projects built through practice and curiosity.</h2>
          </div>

          <p>
            Explore ten meaningful projects from focused JavaScript exercises
            to this React portfolio. The showcase advances automatically every
            five seconds.
          </p>
        </div>

        <div
          className="projects-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="GitHub projects"
          onMouseEnter={() => {
            autoplayPausedRef.current = true
          }}
          onMouseLeave={() => {
            autoplayPausedRef.current = false
          }}
          onFocus={() => {
            autoplayPausedRef.current = true
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              autoplayPausedRef.current = false
            }
          }}
        >
          <div className="projects-carousel-toolbar">
            <p>Browse all projects</p>

            <div className="projects-carousel-controls">
              <button
                type="button"
                onClick={() => scrollProjects(-1)}
                aria-label="Show previous project"
              >
                <FiChevronLeft aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollProjects(1)}
                aria-label="Show next project"
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="projects-container"
            tabIndex="0"
            aria-label="Scrollable project list. Use left and right arrow keys to browse."
            onKeyDown={handleCarouselKeyDown}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

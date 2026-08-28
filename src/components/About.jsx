import {
  FiCode,
  FiMessageCircle,
  FiTarget,
} from "react-icons/fi"

const strengths = [
  {
    icon: FiTarget,
    title: "Problem Solver",
    description: "I focus on practical solutions that address the real need.",
  },
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Readable and maintainable code that is easier to grow.",
  },
  {
    icon: FiMessageCircle,
    title: "Collaborative",
    description: "Clear communication and a dependable team mindset.",
  },
]

function About() {
  return (
    <section id="about" className="about-panel">
      <p className="section-kicker">About me</p>

      <h2>I write code that solves real problems.</h2>

      <p className="section-copy">
        I’m a frontend developer with over two years of professional
        experience building responsive and dependable web applications.
      </p>

      <p className="section-copy">
        I enjoy turning ideas into useful products with thoughtful
        interfaces, clear architecture, and steady attention to quality.
      </p>

      <div className="strength-grid">
        {strengths.map(
          ({ icon: Icon, title, description }) => (
            <div className="strength-item" key={title}>
              <span className="strength-icon">
                <Icon aria-hidden="true" />
              </span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default About
import {
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaServer,
} from "react-icons/fa"

import {
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "REST API", icon: FaServer },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "CSS", icon: FaCss3Alt },
  { name: "HTML5", icon: FaHtml5 },
  { name: "PHP", icon: FaPhp },
]

function Skills() {
  return (
    <section id="skills" className="skills-panel">
      <p className="section-kicker">Skills</p>

      <h2>Tools I use to build.</h2>

      <p className="section-copy">
        A practical stack for modern interfaces, APIs, and
        data-driven applications.
      </p>

      <div className="skills-grid">
        {skills.map(({ name, icon: Icon }) => (
          <div className="skill-card" key={name}>
            <Icon aria-hidden="true" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
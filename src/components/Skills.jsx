import {
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa"

import {
  SiJavascript,
  SiMysql,
} from "react-icons/si"

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PHP", icon: FaPhp },
  { name: "MySQL", icon: SiMysql },
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
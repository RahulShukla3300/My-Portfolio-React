import {
  FiBriefcase,
  FiCode,
  FiLayers,
  FiUsers,
} from "react-icons/fi"

const highlights = [
  {
    icon: FiBriefcase,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: FiCode,
    value: "Full Stack",
    label: "Frontend to backend",
  },
  {
    icon: FiLayers,
    value: "Reliable",
    label: "Maintainable solutions",
  },
  {
    icon: FiUsers,
    value: "Collaborative",
    label: "Clear communication",
  },
]

function ExperienceStrip() {
  return (
    <section
      className="experience-strip"
      aria-label="Professional highlights"
    >
      <div className="experience-inner page-shell">
        {highlights.map(({ icon: Icon, value, label }) => (
          <div className="experience-item" key={value}>
            <span className="experience-icon">
              <Icon aria-hidden="true" />
            </span>

            <span className="experience-text">
              <strong>{value}</strong>
              <small>{label}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceStrip
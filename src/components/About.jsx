import { FiAward, FiCode, FiTarget } from "react-icons/fi";

const strengths = [
  {
    icon: FiCode,
    title: "Beyond the Code",
    description: [
      "✍️ Writing",
      "🎮 Gaming",
      "🧠 Philosophy",
      "🏛️ Politics",
      "🔮 Astrology",
      "🎧 Music",
      "🏍️ Riding",
    ],
  },

  {
    icon: FiAward,
    title: "A Journey of Discipline",
    description: [
      "🏆 UPSC CSE Prelims 2022",
      "🎯 MPPSC Prelims ",
      "🌍 Global Environment Management-DTU",
      "⭐ Star Performer ",
    ],
  },

  {
    icon: FiTarget,
    title: "Focus",
    description: [
      "💻 Full-Stack Development",
      "☁️ Cloud Engineering",
      "🏫 School ERP Systems",
      "🏨 Hotel Management ERP",
    ],
  },
];

function About() {
  return (
    <section id="about" className="about-panel">
      <p className="section-kicker">About Me</p>

      <h2>From Civil Services to Software.</h2>

      <p className="section-copy">
        My Civil Services journey eventually led me toward technology and
        software development. I transformed the same discipline and learning
        mindset into building web applications, improving my development skills,
        and continuously growing as a software professional.
      </p>

      <p className="section-copy">
        I’m a frontend developer with over two years of professional experience
        building responsive and dependable web applications.
      </p>

      <p className="section-copy">
        I enjoy turning ideas into useful products with thoughtful interfaces,
        clear architecture, and steady attention to quality. I have a strong
        interest in frontend development using React.js, JavaScript, and
        TypeScript.
      </p>

      <div className="strength-grid">
        {strengths.map(({ icon: Icon, title, description }) => (
          <div className="strength-item" key={title}>
            <span className="strength-icon">
              <Icon aria-hidden="true" />
            </span>

            <div className="strength-content">
              <h3>{title}</h3>

              <div className="strength-list">
                {description.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

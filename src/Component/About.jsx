import developerImage from "../assets/about/developer.svg";

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={developerImage} alt="Developer Illustration" />
        </div>

        <div className="about-content">
          <h3>Full Stack Software Developer</h3>

          <p>
            I'm Rahul Shukla, a passionate Full Stack Developer with over 2
            years of professional experience building responsive and scalable
            web applications.
          </p>

          <p>
            I enjoy solving real-world problems using modern technologies such
            as React, JavaScript, Node.js, PHP, and PostgreSQL while
            continuously improving my development skills.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">✓ 2+ Years Experience</div>

            <div className="highlight-card">✓ Full Stack Development</div>

            <div className="highlight-card">✓ React • Node.js • PHP</div>

            <div className="highlight-card">✓ PostgreSQL & MySQL</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

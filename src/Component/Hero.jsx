function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>Rahul Shukla</h1>

        <h2>Software Developer</h2>

        <p className="hero-description">
          I build modern, responsive, and user-friendly web applications
          using React, JavaScript, PHP, and modern web technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View My Projects
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          <span>RS</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
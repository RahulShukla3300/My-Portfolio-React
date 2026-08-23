import profilePhoto from "../assets/profile/profilephoto.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>
      <div className="hero-blob blob-4"></div>

      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>



      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          <span className="gradient-text">Rahul </span>
            <span className="dark-text">Shukla</span>
        </h1>

        <h2>Software Developer</h2>

        <p className="hero-description">
          Passionate Full Stack Developer building modern,
          responsive, and scalable web applications using
          React, JavaScript, Node.js, PHP, and PostgreSQL.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View Projects
          </a>


          <span
          className="secondary-button disabled-button"
          aria-disabled="true">
                  Resume Coming Soon
          </span>

          {/* <a href="#"className="secondary-button"
            onClick={(event) =>
            event.preventDefault()}>
            Resume Coming Soon
            </a> */}
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/RahulShukla3300"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rahul-shuklacse"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-image-wrapper">
          <img
            src={profilePhoto}
            alt="Rahul Shukla"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
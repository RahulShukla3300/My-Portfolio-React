import profilePhoto from "../assets/profile/profilephoto.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>
      <div className="hero-blob blob-4"></div>

      <div className="dot-pattern dots-right"></div>
      <div className="dot-pattern dots-left"></div>

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
          Passionate Full Stack Developer building modern, responsive, and
          scalable web applications using React, JavaScript, Node.js, PHP, and
          PostgreSQL.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <span
            className="secondary-button disabled-button"
            aria-disabled="true"
          >
            Resume Coming Soon
          </span>
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

      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>

      <div className="hero-wave">
   <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none" >
    <path
      d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,80C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
    />
  </svg>
</div>

    </section>
  );
}

export default Hero;

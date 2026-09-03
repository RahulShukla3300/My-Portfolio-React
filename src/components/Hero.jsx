import profilePhoto from "../assets/profile/profilephoto.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiMail,
} from "react-icons/fi";

function Hero() {
  return (
    <section id="home" className="hero redesigned-hero">
      <div className="hero-backdrop" aria-hidden="true"></div>

      <div className="hero-inner page-shell">
        <div className="hero-content">
          <div className="availability-badge">
            <span className="availability-dot" aria-hidden="true"></span>
            Available for new opportunities
          </div>

          <h1>Hello, I’m Rahul Shukla</h1>

          <p className="hero-role">Frontend Developer</p>

          <p className="hero-description">
            I build responsive and accessible web interfaces with React,
            JavaScript, HTML, and CSS, focusing on performance and clean user
            experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="redesign-button primary-action">
              View My Work
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <a
              href="/Rahul_Shukla_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="redesign-button secondary-action"
            >
              <FiDownload aria-hidden="true" />
              View Resume
            </a>
          </div>

          <div className="hero-socials" aria-label="Social profiles">
            <a
              href="https://www.linkedin.com/in/rahul-shuklacse"
              target="_blank"
              rel="noreferrer"
              aria-label="Rahul Shukla on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
              href="https://github.com/RahulShukla3300"
              target="_blank"
              rel="noreferrer"
              aria-label="Rahul Shukla on GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="mailto:rahul.shukla3300@gmail.com"
              aria-label="Email Rahul Shukla"
            >
              <FiMail aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-orbit" aria-hidden="true"></div>

          <div className="profile-image-wrapper">
            <img
              src={profilePhoto}
              alt="Rahul Shukla"
              className="profile-image"
              fetchPriority="high"
            />
          </div>

          <div className="floating-card experience-card">
            <span className="floating-card-icon">
              <FiBriefcase aria-hidden="true" />
            </span>

            <span>
              <strong>2+</strong>
              <small>Years Experience</small>
            </span>
          </div>

          <div className="floating-card developer-card">
            <span className="floating-card-icon">
              <FiCode aria-hidden="true" />
            </span>

            <span>
              <strong>Frontend</strong>
              <small>Developer</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

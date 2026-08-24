import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiCode, FiMail, FiMapPin } from "react-icons/fi"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="site-footer">
      <div className="footer-grid page-shell">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="logo-mark" aria-hidden="true">
              RS
            </span>

            <span>Rahul Shukla</span>
          </a>

          <p>Full Stack Software Developer</p>

          <div className="footer-socials">
            <a
              href="https://github.com/RahulShukla3300"
              target="_blank"
              rel="noreferrer"
              aria-label="Rahul Shukla on GitHub"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-shuklacse/"
              target="_blank"
              rel="noreferrer"
              aria-label="Rahul Shukla on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
              href="mailto:rahul.shukla3300@gmail.com"
              aria-label="Email Rahul Shukla"
            >
              <FiMail aria-hidden="true" />
            </a>

            <span aria-label="Full stack developer">
              <FiCode aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="footer-column">
          <h2>Navigation</h2>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h2>Focus</h2>

          <span>Web applications</span>
          <span>Interface development</span>
          <span>Backend development</span>
          <span>Database integration</span>
        </div>

        <div className="footer-column footer-connect">
          <h2>Let’s Connect</h2>

          <a href="mailto:rahul.shukla3300@gmail.com">
            <FiMail aria-hidden="true" />
            Email me
          </a>

          <span>
            <FiMapPin aria-hidden="true" />
            India
          </span>

          <span className="open-to-work">
            <i aria-hidden="true"></i>
            Open to work
          </span>
        </div>
      </div>

      <div className="footer-bottom page-shell">
        <p>© {currentYear} Rahul Shukla. All rights reserved.</p>
        <p>Built with React and attention to detail.</p>
      </div>
    </footer>
  )
}

export default Footer
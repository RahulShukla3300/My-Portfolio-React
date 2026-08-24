import { FaLinkedinIn } from "react-icons/fa"
import { FiArrowRight, FiMail, FiSend } from "react-icons/fi"

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="page-shell">
        <div className="contact-banner">
          <span className="contact-banner-icon">
            <FiSend aria-hidden="true" />
          </span>

          <div className="contact-banner-copy">
            <h2>Let’s build something useful.</h2>

            <p>
              I’m available for full-time opportunities,
              collaborations, and freelance projects.
            </p>
          </div>

          <div className="contact-actions">
            <a
              href="mailto:rahul.shukla3300@gmail.com"
              className="contact-primary"
            >
              <FiMail aria-hidden="true" />
              Get In Touch
              <FiArrowRight aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/rahul-shuklacse/"
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
              aria-label="Contact Rahul Shukla on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Primary navigation">
        <a
          href="#home"
          className="logo"
          aria-label="Rahul Shukla — home"
        >
          <span className="logo-mark" aria-hidden="true">
            RS
          </span>

          <span>Rahul Shukla</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

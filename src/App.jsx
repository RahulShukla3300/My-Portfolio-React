import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import ExperienceStrip from "./components/ExperienceStrip"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ExperienceStrip />

        <div className="about-skills-layout page-shell">
          <About />
          <Skills />
        </div>

        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

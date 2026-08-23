import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skill from './Component/Skill'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <Navbar />

      <main>
       <Hero />
       <About />
       <Skill />
       <Projects />
       <Contact />
      </main>

      <Footer />

    </>
  )
}

export default App

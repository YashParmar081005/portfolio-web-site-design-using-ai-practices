import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Portfolio() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}


import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { useLenis } from './hooks/useLenis'
import { useReducedMotion } from './hooks/useReducedMotion'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { PageProgress } from './components/layout/PageProgress'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

function Portfolio() {
  useLenis()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.documentElement.setAttribute('data-reduce-motion', reduceMotion ? 'true' : 'false')
  }, [reduceMotion])

  return (
    <>
      <PageProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Home from './components/Home'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Hero></Hero>
    </div>
  )
}

export default App

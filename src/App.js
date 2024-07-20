import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <About/>
      <Projects/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
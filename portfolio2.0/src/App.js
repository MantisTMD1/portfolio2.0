import './App.css';
import Navmenu from './components/Navbar.jsx';
import Typedcomponent from './components/Typedcomponent.jsx';
import About from './components/About.jsx';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import Startup from './components/Startup.jsx';




function App() {
  const [className, setClassName] = useState("startscreen")

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("invisible");
    }, 2000)
    return () => clearTimeout(timer)
  }, [])
  Aos.init();
  return (
    
 
    <div className="App">
    <Startup className={className}/>
      <Navmenu />
      <Typedcomponent />
      <About />
      <Tech />
      <Projects />
      <Contact />

    </div>
  
  );
}

export default App;

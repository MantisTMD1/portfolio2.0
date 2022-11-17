import './App.css';
import Navmenu from './components/Navbar.jsx';
import Typedcomponent from './components/Typedcomponent.jsx';
import About from './components/About.jsx';
import Tech from './components/Tech.jsx';
import Projects from './components/Projects.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  Aos.init();
  return (
    <div className="App">

      <Navmenu />
      <Typedcomponent />
      <About />
      <Tech />
      <Projects />

    </div>
  );
}

export default App;

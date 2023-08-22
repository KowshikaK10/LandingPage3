import '../css/App.css';
import NavBar from './NavBar';
import Home from './Home';
import Career from './Career';
import Contact from './Contact';
import { About } from './About';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />      
      <About />
      <Career />
      <Contact />
     
    </div>
  );
}

export default App;

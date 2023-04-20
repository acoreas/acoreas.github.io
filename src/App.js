import './App.css';
import { Route, Routes} from 'react-router-dom';

import Home from "./routes/Home";
import Projects from './routes/Projects';
import Volunteering from './routes/Volunteering';
import Hobbies from './routes/Hobbies';
import Education from './routes/Education';
import Contact from './routes/Contact';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>

      <Navigation/>

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/projects" element={<Projects />}/>
        <Route exact path="/volunteering" element={<Volunteering />}/>
        <Route exact path="/hobbies" element={<Hobbies />}/>
        <Route exact path="/education" element={<Education />}/>
        <Route exact path="/contact" element={<Contact />}/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

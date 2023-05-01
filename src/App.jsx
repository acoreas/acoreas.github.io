import { Route, Routes} from 'react-router-dom';

import Home from "./routes/Home";
import Projects from './routes/Projects';
import Volunteering from './routes/Volunteering';
import Hobbies from './routes/Hobbies';
import Education from './routes/Education';
import Contact from './routes/Contact';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {

  return (
    <div className='App'>

        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/volunteering" element={<Volunteering />}/>
          <Route path="/hobbies" element={<Hobbies />}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>

        <Footer />

    </div>
  );
}

export default App;

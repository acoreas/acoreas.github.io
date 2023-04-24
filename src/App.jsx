// import './App.css';
import { Route, Routes} from 'react-router-dom';

import Home from "./routes/Home";
import Projects from './routes/Projects';
import Volunteering from './routes/Volunteering';
import Hobbies from './routes/Hobbies';
import Education from './routes/Education';
import Contact from './routes/Contact';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Container, createTheme, ThemeProvider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const theme = createTheme({
  palette: {
    primary: {
      main: '#282C34',
    },
    secondary: {
      main: '#F28C28',
    },
    highlight: {
      main: '#DDDDDD'
    },
    light: {
      main: '#F5F5F5'
    }
  },
});


function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>

        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/volunteering" element={<Volunteering />}/>
          <Route exact path="/hobbies" element={<Hobbies />}/>
          <Route exact path="/education" element={<Education />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Routes>

        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;

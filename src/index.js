import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createTheme, ThemeProvider} from '@mui/material';

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
  //............ Theme Edit Template ...........//
  // typography: {             // theme object
  //   boldest: {              // new variant name or override existing variant 
  //     fontWeight: "1000"    // styling
  //   }
  // }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
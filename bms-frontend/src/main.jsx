import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { LocationProvider } from './context/LocationContext.jsx';
import './index.css'
import App from './App.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <LocationProvider>
        <App />
      </LocationProvider>
    </Router>
  </StrictMode>,
)

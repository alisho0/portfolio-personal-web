import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Para que funque el menú hamburguesaimport './index.css'
import PortfolioApp from './PortfolioApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
)

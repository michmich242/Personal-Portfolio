import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FireWorkEffects from './FireworkEffects.jsx'
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FireWorkEffects/>
    <App />
  </StrictMode>
)

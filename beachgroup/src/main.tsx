import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import SecaoTexto from './components/SecaoTexto.tsx'
import SecaoCards from './components/SecaoCards.tsx'
import Footer from './components/Footer.tsx'
import SecaoCoach from './components/SecaoCoach.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header />
      <SecaoTexto />
      <SecaoCards />
      <SecaoCoach />
      <Footer />

      
  </StrictMode>,
)

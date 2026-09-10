import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import SecaoTexto from './components/HomeSecaoTexto.tsx'
import SecaoCards from './components/HomeSecaoCards.tsx'
import Footer from './components/Footer.tsx'
import SecaoCoach from './components/HomeSecaoCoach.tsx'
import HomeSecaoCardSlider from './components/HomeSecaoCarouselImagens.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header />
      <SecaoTexto />
      <SecaoCards />
      <SecaoCoach />
      <HomeSecaoCardSlider />
      <Footer />
    

      
  </StrictMode>,
)

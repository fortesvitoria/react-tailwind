import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Filter from './components/Filter.tsx'
import Card from './components/Card.tsx'
import Info from './components/Info.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex flex-col h-screen bg-[#F4FBFF]'>
      <Header />
      <main className='flex-1 max-w-300 m-auto w-full'>
        <Filter title='Busque o conteúdo que deseja assistir hoje' paragraph='Conteúdo exclusivo todos os dias' placeholder='Curso de react' />
        <div className='bg-white rounded-md py-4 mt-4'>
          <p className='text-[#00A2F7] font-bold text-center'>Os cursos mais buscados</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-3'>
            <Card title='Fundamentos do Next.Js' img='./public/next.png' carga='9h'/>
            <Card title='Fundamentos do Next II.Js' img='./public/react.png' carga='10h'/>
            <Card title='Fundamentos do Next III.Js' img='./public/vector.png' carga='11h'/>
            <Card title='Fundamentos do Next IV.Js' img='./public/node.png' carga='12h'/>
            <Card title='Fundamentos do Next V.Js' img='./public/vector.png' carga='13h'/>
          </div>
        </div>
        <Info />
      </main>
      <Footer />
    </div>
  </StrictMode>,
)

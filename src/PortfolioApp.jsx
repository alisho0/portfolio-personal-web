import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Presentacion } from './components/Presentacion'
import { SobreMi } from './components/SobreMi'
import { Tecnologias } from './components/Tecnologias'
import { Proyectos } from './components/Proyectos'
import { Contactame } from './components/Contactame'
function PortfolioApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      <Presentacion/>
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Contactame />
      <footer className='text-center py-4' style={{ backgroundColor: '#121212', color: '#AAB1C0' }}>
        <p>© 2025 Mi Portfolio. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default PortfolioApp

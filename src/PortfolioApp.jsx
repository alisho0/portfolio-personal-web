import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Presentacion } from './components/Presentacion'
import { SobreMi } from './components/SobreMi'
import { Tecnologias } from './components/Tecnologias'
// import './App.css'

function PortfolioApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Presentacion/>
      <SobreMi />
      <Tecnologias />
    </>
  )
}

export default PortfolioApp

import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Presentacion } from './components/Presentacion'
// import './App.css'

function PortfolioApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Presentacion/>
    </>
  )
}

export default PortfolioApp

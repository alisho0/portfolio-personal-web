import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import yo from '../assets/yo.jpeg'; // Cambia el nombre si tu archivo es diferente

export const Presentacion = () => {
  return (
    <section className="container-fluid vh-100 d-flex align-items-center bg-light container-hero mx-5">
      <div className="row w-100 align-items-center">
        <div className="col-12 col-md-6 text-start mb-4 mb-md-0">
          <h2 className=" text-white display-4 fw-bold mb-3">
            Hola, soy Alejandro
          </h2>
          <h2 className="h1 text-primary mb-3">
            <Typewriter
              words={['Desarrollador Backend', 'Desarrollador Java', 'Apasionado por la tecnología']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>
          <p className=" text-light lead text-secondary">
            Desarrollo de APIs robustas con Java y Springboot, integradas con frontend en React.
          </p>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img src={yo} alt="Foto de Alejandro" className="img-fluid rounded-pill shadow" style={{maxWidth: '320px', width: '100%', height: 'auto'}} />
        </div>
      </div>
    </section>
  )
}

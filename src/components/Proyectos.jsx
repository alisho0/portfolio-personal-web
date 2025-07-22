import React from 'react'
const proyectosData = [
  {
    imagen: "src/assets/proyectos/prueba-card.png",
    titulo: "Sistema Interno de Tramites y Expedientes",
    descripcion: "This is a description of the sample project. It includes various features and functionalities that demonstrate the capabilities of the project.",
  },
  {
    imagen: "src/assets/proyectos/prueba-card.png",
    titulo: "sample project",
    descripcion: "This is a description of the sample project. It includes various features and functionalities that demonstrate the capabilities of the project.",
  },
  {
    imagen: "src/assets/proyectos/prueba-card.png",
    titulo: "sample project",
    descripcion: "This is a description of the sample project. It includes various features and functionalities that demonstrate the capabilities of the project.",
  }
]

export const Proyectos = () => {
  return (
    <section id="proyectos" className="py-5 container row justify-content-around m-auto" >
      <h2 className="text-center text-white mb-5 fw-bold">Mis Proyectos</h2>
      {proyectosData.map((proyecto, idx) => (
        <article key={idx} className="card p-0 border border-dark-subtle" style={{ width: '18rem', backgroundColor: '#181A1B', color: '#fff', marginBottom: '20px' }}>
            <div className='img-card position-relative'>
                <img src={`${proyecto.imagen}`} className="card-img-top " alt="..."/>
                <div className='img-overlay'>
                  <a href="#" target="_blank">
                    <i class="bi bi-eye"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="bi bi-github"></i>
                  </a>
                </div>
            </div>
            <div className="card-body">
                <h4 className='mb-4 fw-bold'>{proyecto.titulo}</h4>
                <p className="card-text" style={{lineHeight: '1.5'}}>{proyecto.descripcion}</p>
            </div>
        </article>
        
      ))}
      
    </section>
  )
}

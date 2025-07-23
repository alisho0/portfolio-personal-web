import React from 'react'

const contacto = [
    {
        titulo: "Correo electrónico",
        descripcion: "Puedes contactarme vía mail para un contacto directo",
        link: "mailto:alejorea2015@gmail.com"
    },
    {
        titulo: "Linkedin",
        descripcion: "Más detalle sobre mi y mi experiencia profesional",
        link: "https://www.linkedin.com/in/rea-alejandro"
    }
]


export const Contactame = () => {
  return (
    <section className='py-5' style={{background: '#181A1B'}}> 
        <div className='container'>
            <h2 className='text-center text-white mb-4 fw-bold'>Contacto</h2>
            <p className='text-white' style={{fontSize: '1.1rem'}}>A través de las siguientes vías de comunicación podrás contactarte conmigo.</p>
            <div className="row">
                {contacto.map((contacto, idx) => (
                    <div className="col-sm-6 mb-3 mb-sm-0" key={idx}>
                        <div className="card bg-dark border border-1">
                        <div className="card-body text-white" >
                            <div className=' d-flex justify-content-between'>
                                <h5 className="card-title fw-bold">{contacto.titulo}</h5>
                                <a href={`${contacto.link}`} target='_blank' className='nav-link link-hover-c'><i class="bi bi-box-arrow-up-right"></i></a>
                            </div>
                            <p className="card-text">{contacto.descripcion}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

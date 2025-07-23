import React from "react";
const proyectosData = [
  {
    imagen: "src/assets/proyectos/prueba-card.png",
    titulo: "Sistema Interno de Tramites y Expedientes",
    descripcion:
      "Sistema realizado por la materia 'Práctica Profesionalizante' hacia la Dirección General de Comercio de Santiago del Estero. \n Permite al público mandar solicitudes de denuncia y realizar un seguimiento del trámite. El usuario interno gestionar solicitudes, realizar un expediente y mantener un registro de documentos.",
    tecnologias: ["Java", "Spring Boot", "React JS", "MySQL", "Bootstrap", "CSS"],
  },
  {
    imagen: "src/assets/proyectos/portfolio-web.png",
    titulo: "Portfolio Web",
    descripcion:
      "Sitio realizado con el fin de mostrar información sobre mi, tecnologías que utilizo, experiencia y una sección de contacto.",
    tecnologias: ["React JS", "Bootstrap", "CSS"],
  },
  {
    imagen: "src/assets/proyectos/prueba-card.png",
    titulo: "sample project",
    descripcion:
      "This is a description of the sample project. It includes various features and functionalities that demonstrate the capabilities of the project.",
    tecnologias: ["JavaScript", "Node.js", "Express"],
  },
];

export const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="py-5 container row justify-content-around m-auto"
    >
      <h2 className="text-center text-white mb-5 fw-bold">Mis Proyectos</h2>
      {proyectosData.map((proyecto, idx) => (
        <article
          key={idx}
          className="card p-0 border border-dark-subtle mb-5"
          style={{
            width: "22rem",
            backgroundColor: "#181A1B",
            color: "#fff",
            marginBottom: "20px",
          }}
        >
          <div className="img-card position-relative">
            <img
              src={`${proyecto.imagen}`}
              className="card-img-top "
              alt="..."
            />
            <div className="img-overlay d-none d-md-flex">
              <a href="#" target="_blank">
                <i className="bi bi-eye"></i>
              </a>
              <a href="#" target="_blank">
                <i className="bi bi-github"></i>
              </a>
            </div>
            <div className="d-block d-md-none text-center mt-2">
              <a href="#" target="_blank" className="btn btn-outline-light me-2">
                <i className="bi bi-eye"></i> Ver
              </a>
              <a href="#" target="_blank" className="btn btn-outline-light">
                <i className="bi bi-github"></i> Código
              </a>
            </div>
          </div>
          <div className="card-body">
            <h4 className="mb-4 fw-bold">{proyecto.titulo}</h4>
            <p className="card-text" style={{ lineHeight: "1.5" }}>
              {proyecto.descripcion.split("\n").map((linea, idx) => (
                <React.Fragment key={idx}>
                  {linea}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
            {/* Sección de tec usadas en el proyecto */}
            <div>
              {proyecto.tecnologias.map((tec, idx) => (
                <span key={idx} className="badge bg-success me-2">
                  {tec}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

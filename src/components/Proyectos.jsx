import React from "react";
import portimg from "../assets/proyectos/portfolio-web.png";
import siteimg from "../assets/proyectos/prueba-card.png";
import anirecoimg from "../assets/proyectos/anireco.png";

const proyectosData = [
  {
    imagen: siteimg,
    titulo: "Sistema Interno de Tramites y Expedientes",
    descripcion:
      "Sistema realizado por la materia 'Práctica Profesionalizante' hacia la Dirección General de Comercio de Santiago del Estero. \n Permite al público mandar solicitudes de denuncia y realizar un seguimiento del trámite. El usuario interno gestionar solicitudes, realizar un expediente y mantener un registro de documentos.",
    tecnologias: ["Java", "Spring Boot", "React JS", "MySQL", "Bootstrap", "CSS"],
    link: "#",
    repo: "#"
  },
  {
    imagen: portimg,
    titulo: "Portfolio Web",
    descripcion:
      "Este proyecto es un sitio web diseñado para mostrar mis proyectos, habilidades y experiencia de manera profesional. El objetivo fue crear un espacio claro y accesible donde cualquiera pueda conocer mi trabajo y ponerse en contacto conmigo. \n Cuenta con un diseño simple, totalmente responsive, y secciones dinámicas que permiten una navegación simple. Fue construido con React y Bootstrap, priorizando la usabilidad y la estética.",
    tecnologias: ["React JS", "Bootstrap", "CSS"],
    link: "https://portfolio-personal-web-delta.vercel.app/",
    repo: "https://github.com/alisho0/portfolio-personal-web"
  },
  {
    imagen: anirecoimg,
    titulo: "AniReco",
    descripcion:
      "AniReco es una aplicación web pensada para ayudar a los usuarios a descubrir nuevos animes según sus preferencias. Permite realizar búsquedas personalizadas y mostrar recomendaciones obtenidas a partir del consumo de API de AniList. \n Además, cuenta con una sección de favoritos donde los usuarios pueden guardar sus animes preferidos para acceder a ellos fácilmente en el futuro.",
    tecnologias: ["Java", "Thymeleaf", "Spring Boot", "Bootstrap", "JavaScript"],
    link: "https://anime-recom.onrender.com/",
    repo: "https://github.com/alisho0/anime-recom"
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
              {proyecto.link !== "#" && (
                <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-eye"></i>
                </a>
              )}

              {proyecto.repo !== "#" && (
                <a href={proyecto.repo} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
              )}
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

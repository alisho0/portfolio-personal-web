import React from "react";
import portimg from "../assets/proyectos/portfolio-web.png";
import siteimg from "../assets/proyectos/prueba-card.png";
import anirecoimg from "../assets/proyectos/anireco.png";
import sep from "../assets/proyectos/sep.png"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { FiGithub } from "react-icons/fi";
  const projects = [
    {
      title: "Sistema Interno de Tramites y Expedientes (SITE)",
      description:
        "Sistema realizado por la materia 'Práctica Profesionalizante' hacia la Dirección General de Comercio de Santiago del Estero. \n Permite al público mandar solicitudes de denuncia y realizar un seguimiento del trámite. El usuario interno gestionar solicitudes, realizar un expediente y mantener un registro de documentos.",
      tech: ["Java", "Spring Boot", "React JS", "MySQL", "Bootstrap", "CSS"],
      image: siteimg,
      link: "https://github.com/alisho0/site-backend"
    },
    {
      title: "Portfolio Web",
      description:"Este proyecto es un sitio web diseñado para mostrar mis proyectos, habilidades y experiencia de manera profesional. El objetivo fue crear un espacio claro y accesible donde cualquiera pueda conocer mi trabajo y ponerse en contacto conmigo. \n Cuenta con un diseño simple, totalmente responsive, y secciones dinámicas que permiten una navegación simple. Fue construido con React y Bootstrap, priorizando la usabilidad y la estética.",
      tech: ["React JS", "Tailwind CSS", "CSS"],
      image: portimg,
      link: "https://github.com/alisho0/portfolio-personal-web"
    },
    {
      title: "AniReco",
      description:
        "AniReco es una aplicación web pensada para ayudar a los usuarios a descubrir nuevos animes según sus preferencias. Permite realizar búsquedas personalizadas y mostrar recomendaciones obtenidas a partir del consumo de API de AniList. \n Además, cuenta con una sección de favoritos donde los usuarios pueden guardar sus animes preferidos para acceder a ellos fácilmente en el futuro.",
      tech: ["Java", "Thymeleaf", "Spring Boot", "Bootstrap", "JavaScript"],
      image: anirecoimg,
      link: "https://github.com/alisho0/anime-recom"
    },
    {
      title: "Sistema de Gestión Escolar Privado",
      description:
        "Solución de caché distribuido con replicación y failover automático, reduciendo latencia de respuesta un 80%.",
      tech: ["Java", "Spring Boot", "React JS", "JavaScript", "Tailwind CSS", "Spring Security"],
      image: sep,
      link: "https://github.com/alisho0/sep-project"
    },
  ]

export const Proyectos = ({activeSection}) => {
  return (

    <section id="proyectos" className="py-20 px-6 bg-linear-to-b from-transparent to-black/30 scroll-mt-20 text-white bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos <span className="text-purple-600">Destacados</span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-purple-200 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/40 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-600/50 transition transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black/20">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
              </div>

              {/* contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">{project.description}</p>

                {/* tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 text-purple-600 text-xs font-semibold rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-600/70 rounded-lg text-sm font-medium transition text-black"
                  >
                    Ver Proyecto
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-800/80 text-foreground rounded-lg text-sm font-medium transition"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

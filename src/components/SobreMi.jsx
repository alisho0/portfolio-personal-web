import React from "react";
import yo from "../assets/yo.jpeg";
export const SobreMi = ({activeSection}) => {

  const isVisible = activeSection === "sobremi"

  return (
    <section
      id="sobremi"
      className={`min-h-screen flex items-center justify-center px-6 py-20 transition-opacity duration-500 bg-zinc-950 text-white`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
            Conóceme
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-balance">
            Quién Soy y Qué Me Apasiona
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Soy Alejandro Rea,{" "}
              <span className="text-purple-600 font-semibold">
                desarrollador backend apasionado
              </span>{" "}
              con{" "}
              <span className="text-purple-400 font-semibold">
                1 año de experiencia
              </span>{" "}
              en proyectos personales y académicos. Técnico en Desarrollo de Software, enfocado en crear soluciones útiles y
              mantenibles aplicando metodologías ágiles.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Me especializo en{" "}
              <span className="font-semibold">Java y Spring Boot</span>, diseño
              de <span className="font-semibold">APIs REST</span> y trabajo con
              bases de datos como MySQL. Disfruto escribir código
              limpio y mantenible que otros desarrolladores
              puedan entender y mejorar.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Disfruto el trabajo en equipo, aprender nuevas tecnologías y crecer profesionalmente en entornos que impulsen el dominio de Java y más.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <p className="text-foreground">Ubicación: Santiago del Estero, Argentina</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <p className="text-foreground">
                  Experiencia: 1 año en desarrollo backend
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <p className="text-foreground">
                  Disponibilidad: Activamente buscando oportunidades
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Stats/Info */}
          <div className="space-y-6">
            <img
              className="border shadow-lg rounded-4xl"
              src={yo}
              alt="Alejandro Rea"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

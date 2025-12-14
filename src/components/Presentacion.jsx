import React from "react";
import { Typewriter } from "react-simple-typewriter";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { PiDownloadSimple } from "react-icons/pi";

export const Presentacion = ({ setActiveSection, activeSection }) => {
    const handleNavClick = (id) => {
    setActiveSection(id)
    // setMenuOpen(false)
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section
      id="presentacion"
      className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-zinc-950 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 border border-purple-500 rounded-full text-sm text-purple-600 font-medium">
            Backend Developer
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-2">
            Hola, me llamo
          </h2>
          <h1 className="text-6xl pb-4 md:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-pink-400 to-purple-500">
            Alejandro Rea
          </h1>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Construyendo <span className="text-purple-600">APIs robustas</span> y
          sistemas escalables
        </h3>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Backend Developer con 1 año de experiencia en desarrollo de APIs
          robustas con Java y Springboot, integradas con frontend en React.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105 cursor-pointer shadow-lg"
            onClick={() => handleNavClick("proyectos")}
          >
            Ver Proyectos
          </button>
          <a
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition transform hover:scale-105 cursor-pointer shadow-lg flex items-center gap-1"
            download
            href="src\assets\CV_GabrielAlejandroRea_2025.pdf"
          >
            <PiDownloadSimple className="h-5 w-5" />
            <span>Descargar CV</span>
          </a>
          <button
            className="px-8 py-3 border rounded-lg border-purple-600  hover:bg-purple-700/20 cursor-pointer  font-semibold transition shadow-lg hover:scale-105"
            onClick={() => handleNavClick("contacto")}
          >
            Contactar
          </button>
        </div>
        <div className="flex justify-center animate-bounce pt-8">
          <ArrowDownIcon className="text-purple-600 h-5 w-5" />
        </div>
      </div>
    </section>
  );
};

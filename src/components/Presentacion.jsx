import React from "react";
import { Typewriter } from "react-simple-typewriter";
import yo from "../assets/yo.jpeg"; // Cambia el nombre si tu archivo es diferente
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import cv from "../assets/CV-ReaAlejandro.pdf";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

export const Presentacion = ({ setActiveSection, activeSection }) => {
  return (
    <section id="presentacion" className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 border border-purple-500 rounded-full text-sm text-purple-600 font-medium">
            Backend Developer & Cloud Architect
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
          sistemas backend escalables
        </h3>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Backend Developer con 1 año de experiencia en desarrollo de APIs robustas con Java y Springboot, integradas con frontend en React.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition transform hover:scale-105 cursor-pointer" onClick={() => setActiveSection("proyectos")}>
            Ver Proyectos
          </button>
          <button className="px-8 py-3 border rounded-lg border-purple-600  hover:bg-purple-50/20 cursor-pointer  font-semibold transition" onClick={() => setActiveSection("contacto")}>
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

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import yo from "../assets/yo.jpeg"; // Cambia el nombre si tu archivo es diferente
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import cv from "../assets/CV-ReaAlejandro.pdf";

export const Presentacion = () => {
  return (
    <section
      className="container-fluid vh-100 d-flex align-items-center container-hero px-0"
      style={{ background: "linear-gradient(180deg, #0e0e0e, #121212)" }}
    >
      <div className="row w-100 align-items-center">
        <div className="col-12 col-md-6 text-start mb-4 mb-md-0 px-5">
          <h2 className="fw-bold mb-3" style={{ color: "#F5F6FA" }}>
            Hola, soy Alejandro
          </h2>
          <h2 className="h1 mb-3" style={{ color: "#6C63FF" }}>
            <Typewriter
              words={[
                "Desarrollador Backend",
                "Desarrollador Java",
                "Apasionado por la tecnología",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </h2>
          <p className="lead" style={{ color: "#AAB1C0" }}>
            Un año de experiencia en desarrollo de APIs robustas con Java y Springboot, integradas con
            frontend en React.
          </p>
          <div className="mt-3 d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/rea-alejandro"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span
                className="lkd-icon redes-img d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                style={{
                  background: "#0A66C2",
                  width: 48,
                  height: 48,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  style={{ width: 24, height: 24 }}
                />
              </span>
            </a>
            <a
              href="https://github.com/alisho0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span
                className="github-icon redes-img d-inline-flex align-items-center justify-content-center rounded-circle shadow"
                style={{
                  background: "#23272F",
                  width: 48,
                  height: 48,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src={github}
                  alt="GitHub"
                  style={{ width: 24, height: 24 }}
                />
              </span>
            </a>
            <a
              href={cv}
              download
              className="btn btn-outline-light d-flex align-items-center gap-2"
              style={{ fontWeight: 'bold', fontSize: '1rem', padding: '0.5rem 1.2rem' }}
            >
              <i className="bi bi-download"></i>
              CV
            </a>

          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            src={yo}
            alt="Foto de Alejandro"
            className="img-fluid rounded-pill shadow"
            style={{
              maxWidth: "320px",
              width: "100%",
              height: "auto",
              boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

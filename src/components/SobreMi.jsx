import React from "react";
import yo from "../assets/yo.jpeg";
export const SobreMi = () => {
  return (
    <section className="bg-dark py-5 w-100" id="sobremi">
      <div className="container">
        <h2  className="text-white text-center fw-bold mb-4">Sobre mi</h2>
        <div className="row align-items-center justify-content-center gap-5">
          <div className="col-md-7 text-white px-4" style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
            <p>
              Soy Alejandro Rea, desarrollador backend con <b>un año experiencia</b> en proyectos personales y académicos. Estudiante de Tecnicatura en Desarrollo de Software, enfocado en crear soluciones útiles y mantenibles aplicando metodologías ágiles.
            </p>
             Disfruto el trabajo en equipo, aprender nuevas tecnologías y crecer profesionalmente en entornos que impulsen el dominio de Java y más.
            <p>
            </p>
          </div>
          <div className="col-md-5 text-center">
            {/* <img
              src={yo}
              alt="Foto personal"
              className="img-fluid rounded"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            /> */}
            <div className="tenor-gif-embed shadow" data-postid="1747207714643625346" data-share-method="host" data-aspect-ratio="1.79104" data-width="100%"><a href="https://tenor.com/view/ngoding-mulu-gif-1747207714643625346">Ngoding Mulu GIF</a>from <a href="https://tenor.com/search/ngoding+mulu-gifs">Ngoding Mulu GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

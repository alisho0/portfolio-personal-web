import React from "react";
import yo from "../assets/yo.jpeg";
export const SobreMi = () => {
  return (
    <section className="bg-dark py-5 w-100">
      <div className="container">
        <h2 id="scrollspyHeading2" className="text-white text-center fw-bold mb-4">Sobre mi</h2>
        <div className="row align-items-center justify-content-center gap-5">
          <div className="col-md-7 text-white px-4" style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
            <p>
              Buenas, mi nombre es Rea Gabriel Alejandro, tengo 20 años y soy desarrollador backend con experiencia en Java, Spring Boot y
              bases de datos relacionales. Tengo un año de experiencia desarrollando software en proyectos personales y académicos. Actualmente curso mi segundo año en tecnicatura en desarrollo de software.
            </p>
            <p>
              Me gusta trabajar en equipo,
              aprender nuevas tecnologías y construir software útil y mantenible aplicando metodologías ágiles.
              Actualmente busco crecer profesionalmente en entornos que aporten en un mayor aprendizaje sobre el lenguaje Java y otros.
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

import React from "react";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backdropFilter: 'blur(6px)'}}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            {/* <img src="your-logo.png" alt="Your Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
            Portfolio Web
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav px-5 gap-5">
              <li className="nav-item">
                <a
                  className="nav-link active text-white fw-bold "
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#scrollspyHeading2">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white fw-bold" href="#stack-tecnologico">
                  Stack Tecnológico
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

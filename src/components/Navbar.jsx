import React from "react";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backdropFilter: 'blur(6px)'}}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            {/* <img src="your-logo.png" alt="Your Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
            Your Company Name
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="">
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

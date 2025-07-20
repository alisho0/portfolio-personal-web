import React from "react";

export const Tecnologias = () => {
  return (
    <section className="py-5" style={{ background: '#181A1B' }}>
      <div className="container">
        <h2 className="text-center text-white mb-5">Stack Tecnológico</h2>
        <div className="row justify-content-center g-4 text-white">
          <div className="col-12 col-md-4 d-flex">
            <div className="w-100 bg-dark border border-secondary rounded-4 p-4 d-flex flex-column align-items-center h-100">
              <h4 className="mb-3 text-info">Backend</h4>
              <ul className="list-unstyled mb-0">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>JPA</li>
                <li>Hibernate</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex ">
            <div className="w-100 bg-dark border border-secondary rounded-4 p-4 d-flex flex-column align-items-center h-100">
              <h4 className="mb-3 text-warning">Frontend</h4>
              <ul className="list-unstyled mb-0 ">
                <div className="row">
                  <li className="col-6">React</li>
                  <li className="col-6">JavaScript</li>
                </div>
                <div className="row">
                  <li className="col-6">HTML</li>
                  <li className="col-6">CSS</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex">
            <div className="w-100 bg-dark border border-secondary rounded-4 p-4 d-flex flex-column align-items-center h-100">
              <h4 className="mb-3 text-success">Herramientas</h4>
              <ul className="list-unstyled mb-0">
                <li>Git</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>IntelliJ IDEA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

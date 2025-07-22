import React from "react";

const tecData = {
  Backend: [
    { name: "Java", img: "src/assets/tec/icons8-java-48.png" },
    { name: "Spring Boot", img: "src/assets/tec/springboot.png" },
    // { name: "JPA", img: "src/assets/tec/jpa.png" },
    { name: "Hibernate", img: "src/assets/tec/hibernate.png" },
    // { name: "Python", img: "src/assets/tec/python.png" },
    // { name: "Django", img: "src/assets/tec/django.png" },
  ],
  Frontend: [
    { name: "JavaScript", img: "src/assets/tec/js.png" },
    { name: "React", img: "src/assets/tec/icons8-react-native-48.png" },
    { name: "HTML", img: "src/assets/tec/html.png" },
    { name: "CSS", img: "src/assets/tec/css.png" },
  ],
  Herramientas: [
    { name: "Git", img: "src/assets/tec/git.png" },
    { name: "GitHub", img: "src/assets/tec/githun.png" },
    { name: "IntelliJ", img: "src/assets/tec/intellij.png" },
    { name: "VSCode", img: "src/assets/tec/vscode.png" },
    { name: "Notion", img: "src/assets/tec/notion.png" },
    { name: "Postman", img: "src/assets/tec/postman.svg" },
  ],
};

export const Tecnologias = () => {
  return (
    <section id="stack-tecnologico" className="py-5" style={{ background: "#181A1B"}}>
      <div className="container">
        <h2 className="text-center text-white mb-5 fw-bold">Stack Tecnológico</h2>
        <div className="row justify-content-center g-4 text-white">
          {Object.entries(tecData).map(([cat, items], idx) => (
            <div key={cat} className="col-12 col-md-4 d-flex">
              <div className="w-100 bg-dark border border-secondary rounded-4 p-4 d-flex flex-column align-items-center h-100">
                <h4 className={`mb-4 `} style={{ color: idx === 0 ? '#890dfdff' : idx === 1 ? 'yellow' : 'lightgreen' }}>{cat}</h4>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  {items.map((tec) => (
                    <div
                      key={tec.name}
                      className="bg-secondary bg-opacity-25 rounded-circle d-flex flex-column align-items-center justify-content-center shadow tec-icon"
                      style={{ width: 64, height: 64, position: 'relative', cursor: 'pointer', transition: 'all 0.3s' }}
                      title={tec.name}
                    >
                      <img
                        src={tec.img}
                        alt={tec.name}
                        style={{ width: 32, height: 32, objectFit: 'contain', transition: 'transform 0.3s' }}
                        className="icon-size"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

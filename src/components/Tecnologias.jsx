import React from "react";
import java from "../assets/tec/icons8-java-48.png";
import sb from "../assets/tec/springboot.png";
import hb from "../assets/tec/hibernate.png";
import py from "../assets/tec/python.png";
import dj from "../assets/tec/django.svg";
import mysql from "../assets/tec/mysql.png";
import js from "../assets/tec/js.png";
import react from "../assets/tec/icons8-react-native-48.png";
import html from "../assets/tec/html.png";
import css from "../assets/tec/css.png";
import git from "../assets/tec/git.png";
import github from "../assets/tec/githun.png";
import ij from "../assets/tec/intellij.png";
import vscode from "../assets/tec/vscode.png";
import notion from "../assets/tec/notion.png";
import pm from "../assets/tec/postman.svg";

const tecData = {
  Backend: [
    { name: "Java", img: java },
    { name: "Spring Boot", img: sb },
    // { name: "JPA", img: "src/assets/tec/jpa.png" },
    { name: "Hibernate", img: hb },
    { name: "Python", img: py },
    { name: "Django", img: dj },
    { name: "MySQL", img: mysql },
  ],
  Frontend: [
    { name: "JavaScript", img: js },
    { name: "React", img: react },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
  ],
  Herramientas: [
    { name: "Git", img: git },
    { name: "GitHub", img: github },
    { name: "IntelliJ", img: ij },
    { name: "VSCode", img: vscode },
    { name: "Notion", img: notion },
    { name: "Postman", img: pm },
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

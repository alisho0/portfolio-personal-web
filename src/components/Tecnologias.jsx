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
  const skills = [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Spring Security", "Hibernate", "Python", "Django", "Maven", "MySQL"],
    },
    {
      category: "Frontend",
      items: ["JavaScript", "React JS", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker"],
    },
    {
      category: "Herramientas",
      items: ["Git", "GitHub", "Notion", "IntelliJ", "VS Code", "Vite"],
    },
  ]
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

    <section id="skills" className="py-20 px-6 scroll-mt-20 text-white bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades <span className="text-purple-600">Técnicas</span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-purple-200 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-8 bg-black/40 border border-gray-800 hover:border-purple-600/50 rounded-xl transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-purple-600 mb-6">{skill.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-neutral-950 hover:bg-purple-600/20 text-foreground rounded-lg text-sm font-medium transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

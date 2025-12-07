import React from "react";
import { CgMail } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";
export const Navbar = ({ activeSection, setActiveSection, menuOpen, setMenuOpen }) => {
    const navItems = [
    { id: "sobremi", label: "SOBRE MÍ" },
    { id: "tecnologias", label: "TECNOLOGÍAS" },
    { id: "proyectos", label: "PROYECTOS" },
    { id: "contacto", label: "CONTACTO" },
  ]
  const handleNavClick = (id) => {
    setActiveSection(id)
    setMenuOpen(false)
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* sidebar desktop */}
      <aside className="hidden md:flex flex-col w-80 bg-black/40 border-r border-gray-800 p-12 sticky top-0 h-screen justify-between">
        <div>
          {/* nombre */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-purple-600">Alejandro Rea</h2>
            <p className="text-gray-500 text-sm mt-2">
              Backend Developer
            </p>
          </div>

          {/* nav */}
          <nav className="space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block text-left text-sm font-semibold tracking-wider transition-all pb-2 border-b-2 ${
                  activeSection === item.id
                    ? "text-purple-600 border-purple-600"
                    : "text-gray-500 border-transparent hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* redes */}
        <div className="flex gap-4">
          <a
            href="https://github.com/alisho0"
            className="p-3 bg-zinc-950 hover:bg-purple-600/20 rounded-lg transition transform hover:scale-110"
            aria-label="GitHub"
            target="_blank"
          >
            <FiGithub className="text-purple-600 h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rea-alejandro/"
            className="p-3 bg-zinc-950 hover:bg-purple-600/20 rounded-lg transition transform hover:scale-110"
            aria-label="LinkedIn"
            target="_blank"
          >
            <LiaLinkedinIn className="text-purple-600 h-5 w-5" />
          </a>
          <a
            href="mailto:alejorea2015@gmail.com"
            className="p-3 bg-zinc-950 hover:bg-purple-600/20 rounded-lg transition transform hover:scale-110"
            aria-label="Email"
          >
            <CgMail className="text-purple-600 h-5 w-5" />
          </a>
        </div>
      </aside>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm pt-20 overflow-y-auto">
          <nav className="flex flex-col gap-6 p-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-lg font-semibold py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-purple-600 border-b-2 border-primary pb-2"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* links para movil */}
          <div className="flex gap-4 p-6 pt-8 border-t border-gray-800">
            <a
              href="https://github.com/alisho0"
              className="p-3 bg-zinc-950 hover:bg-purple-600/20 rounded-lg transition transform hover:scale-110"
              aria-label="GitHub"
              target="_blank"
            >
              <FiGithub  className="text-purple-600 h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rea-alejandro/"
              className="p-3 bg-zinc-950 hover:bg-purple-600/20 rounded-lg transition transform hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
            >
              <LiaLinkedinIn  className="text-purple-600 h-5 w-5" />
            </a>
            <a
              href="mailto:alejorea2015@gmail.com"
              className="p-3 bg-zinc-950 hover:bg-purple-600/20 rounded-lg transition transform hover:scale-110"
              aria-label="Email"
            >
              <CgMail  className="text-purple-600 h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

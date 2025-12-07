import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Presentacion } from "./components/Presentacion";
import { SobreMi } from "./components/SobreMi";
import { Tecnologias } from "./components/Tecnologias";
import { Proyectos } from "./components/Proyectos";
import { Contactame } from "./components/Contactame";
import { BiMenu } from "react-icons/bi";
import { XMarkIcon } from "@heroicons/react/16/solid";
function PortfolioApp() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("presentacion")

    useEffect(() => {
    setActiveSection("presentacion");
    document.getElementById("presentacion")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-card rounded-lg transition"
          >
            {menuOpen ? <XMarkIcon className="h-5 w-5 text-white" /> : <BiMenu className="h-5 w-5" />}
          </button>
        </div>
        <div className="flex flex-col md:flex-row min-h-screen">
          <Navbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <main className="flex-1 w-full md:ml-0">
            <Presentacion setActiveSection={setActiveSection} activeSection={activeSection} />
            <SobreMi activeSection={activeSection} />
            <Tecnologias activeSection={activeSection} />
            <Proyectos activeSection={activeSection} />
            <Contactame activeSection={activeSection} />
            <footer className="text-center py-4 bg-zinc-900">
              <p>
                © 2025 Alejandro Rea. Desarrollador Backend. Todos los derechos
                reservados.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}

export default PortfolioApp;

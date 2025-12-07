import { CgMail } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { LiaLinkedinIn } from "react-icons/lia";

const contacto = [
  {
    icon: CgMail,
    label: "Correo electrónico",
    value: "alejorea2015@gmail.com",
    href: "mailto:alejorea2015@gmail.com",
  },
  {
    icon: LiaLinkedinIn,
    label: "LinkedIn",
    value: "in/rea-alejandro",
    href: "https://www.linkedin.com/in/rea-alejandro/",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "@alisho0",
    href: "https://github.com/alisho0",
  },
];

export const Contactame = ({activeSection}) => {
  return (
    <section
      id="contacto"
      className="py-20 px-6 bg-linear-to-b from-black/30 to-transparent scroll-mt-20 bg-zinc-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para <span className="text-purple-600">colaborar</span>?
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-linear-to-r from-purple-600 to-purple-300 rounded-full"></div>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Siempre estoy abierto a nuevos proyectos, oportunidades y
          conversaciones sobre tecnología backend, arquitectura de sistemas y
          soluciones en la nube.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacto.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              className="group p-6 bg-black/40 border border-gray-800 hover:border-purple-600/50 rounded-lg transition transform hover:-translate-y-1"
            >
              <Icon
                className="mx-auto mb-3 text-purple-600 group-hover:scale-110 transition"
                size={32}
              />
              <p className="font-semibold ">{label}</p>
              <p className="text-gray-500 text-sm">{value}</p>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:alejorea2015@gmail.com"
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-600/90 font-bold rounded-lg transition transform hover:scale-105"
        >
          Enviar Mensaje
        </a>
      </div>
    </section>
  );
};

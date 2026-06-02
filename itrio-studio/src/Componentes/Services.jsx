import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "Desarrollo Web",
    desc: "Sitios modernos, rápidos y optimizados para convertir.",
    icon: Monitor,
    color: "blue"
  },
  {
    title: "Redes Sociales",
    desc: "Gestión estratégica para hacer crecer tu marca.",
    icon: Smartphone,
    color: "purple"
  },
  {
    title: "Diseño Gráfico",
    desc: "Identidad visual que transmite profesionalismo.",
    icon: Palette,
    color: "cyan"
  }
];

export default function Services() {
  return (
    <section className="py-32 relative">

      {/* fondo con profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl text-center font-semibold mb-16"
        >
          Nuestros Servicios
        </motion.h2>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-8 rounded-2xl 
                bg-black/40 backdrop-blur-md
                border border-white/10
                hover:border-blue-400/40
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(96,165,250,0.2)]"
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition blur-xl bg-blue-500/20 rounded-2xl"></div>

                <div className="relative z-10">

                  {/* ICONO PRO */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="
                      w-14 h-14 flex items-center justify-center
                      rounded-xl
                      bg-gradient-to-br from-blue-500/20 to-purple-500/20
                      border border-blue-400/20
                      shadow-[0_0_20px_rgba(96,165,250,0.3)]
                      group-hover:scale-110
                      group-hover:shadow-[0_0_40px_rgba(96,165,250,0.6)]
                      transition
                    ">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <h3 className="text-xl text-white font-semibold mb-3 group-hover:text-blue-300 transition">
                    {s.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {s.desc}
                  </p>

                  {/* línea glow */}
                  <div className="h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 
                  group-hover:w-full transition-all duration-300 mt-6"></div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
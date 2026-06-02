import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Idea",
    desc: "Escuchamos tu propuesta"
  },
  {
    number: "02",
    title: "Diseño",
    desc: "Creamos el concepto"
  },
  {
    number: "03",
    title: "Desarrollo",
    desc: "Construimos tu web"
  },
  {
    number: "04",
    title: "Lanzamiento",
    desc: "Publicamos tu proyecto"
  }
];

export default function Process() {
  return (
    <section className="py-32 relative">

      {/* fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2c]/40 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl text-center font-semibold mb-16" >
         Encendamos la mecha
      <h6>Convertimos ideas en resultados reales</h6>
         
        </motion.h2>

        {/* línea */}
        <div className="relative mb-16">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        {/* pasos */}
        <div className="grid md:grid-cols-4 gap-10 text-center">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             transition={{ duration: 1 }}
              className="group"

              
            >
              {/* número */}
              <div className="text-5xl font-bold text-white/80 mb-4 group-hover:text-blue-400 transition">
                {step.number}
              </div>

              {/* título */}
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              {/* descripción */}
              <p className="text-gray-400 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* botón */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition">
            Ver Portafolio
          </button>
        </div>

      </div>
    </section>
  );
}
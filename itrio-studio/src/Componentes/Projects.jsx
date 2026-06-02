import { motion } from "framer-motion";

const projects = [
  {
    title: "Landing Startup",
    category: "Desarrollo Web",
    img: "/project1.jpg"
  },
  {
    title: "E-commerce",
    category: "Desarrollo Web",
    img: "/project2.jpg"
  },
  {
    title: "Branding Completo",
    category: "Diseño Gráfico",
    img: "/project3.jpg"
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 relative">

      {/* fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2c]/30 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl text-center font-semibold mb-16"
        >
          Nuestros Trabajos
        </motion.h2>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-800"
            >

              {/* imagen */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>

              {/* info */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">

                <h3 className="text-lg font-semibold">
                  {p.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {p.category}
                </p>

              </div>

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-2xl"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 relative text-center overflow-hidden">

      {/* glow fondo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* texto */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6
          [text-shadow:0_0_30px_rgba(96,165,250,0.4)]"
        >
          ¿Tenés un proyecto en mente?
          <br />
          <span className="text-blue-400">
            ¡Trabajemos juntos!
          </span>
        </motion.h2>

        {/* botón */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 px-10 py-4 rounded-xl 
          bg-gradient-to-r from-blue-500 to-purple-500 
          hover:scale-105 transition duration-300
          shadow-[0_0_30px_rgba(96,165,250,0.5)]"
        >
          Contactar
        </motion.button>

      </div>
    </section>
  );
}
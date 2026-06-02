import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className=" relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6 sm:px-10 md:px-16 ">

      {/* 🔥 Fondo glow dinámico */}
      <div className="absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-500 opacity-20 blur-[120px] rounded-full animate-pulse"></div>

      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full animate-pulse top-10 sm:top-20 right-0 sm:right-10"></div>

      {/* contenido */}
      <div className="relative z-10 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-3xl sm:text-4xl md:text-6xl 
          font-bold leading-tight tracking-tight
          [text-shadow:0_0_40px_rgba(96,165,250,0.3)]
          "
        >
          Diseñamos y desarrollamos
          <br />
          <span className="text-blue-400">
            experiencias digitales
          </span>
          <br />
          que hacen crecer tu negocio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
          mt-6 
          text-gray-400 
          text-sm sm:text-base md:text-lg
          px-2 sm:px-0
          "
        >
          Desarrollo Web • Redes Sociales • Diseño Gráfico
        </motion.p>

        {/* botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
          flex flex-col sm:flex-row 
          gap-4 justify-center mt-10
          "
        >
          <button className="
            px-6 sm:px-8 py-3 sm:py-4 
            rounded-xl 
            bg-gradient-to-r from-blue-500 to-purple-500
            hover:scale-105 transition
            shadow-[0_0_30px_rgba(96,165,250,0.5)]
          ">
            Ver Proyectos
          </button>

          <button className="
            px-6 sm:px-8 py-3 sm:py-4 
            rounded-xl 
            border border-gray-600
            hover:border-blue-400 transition
          ">
            Trabajemos juntos
          </button>
        </motion.div>

      </div>
    </section>
  );
}
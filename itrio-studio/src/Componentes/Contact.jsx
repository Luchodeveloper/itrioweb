import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 relative">

      {/* glow fondo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl text-center font-semibold mb-6"
        >
          Contacto
        </motion.h2>

        <p className="text-center text-gray-400 mb-12">
          Contanos sobre tu proyecto y te respondemos a la brevedad
        </p>

        {/* formulario */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid gap-6"
        >

          {/* nombre */}
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-4 rounded-xl bg-[#0c0c0c] border border-gray-800 
            focus:border-blue-500 outline-none transition"
          />

          {/* email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-[#0c0c0c] border border-gray-800 
            focus:border-blue-500 outline-none transition"
          />

          {/* mensaje */}
          <textarea
            rows="5"
            placeholder="Contanos tu idea..."
            className="w-full p-4 rounded-xl bg-[#0c0c0c] border border-gray-800 
            focus:border-blue-500 outline-none transition"
          ></textarea>

          {/* botón */}
          <button
            type="submit"
            className="mt-4 px-8 py-4 rounded-xl 
            bg-gradient-to-r from-blue-500 to-purple-500 
            hover:scale-105 transition duration-300
            shadow-[0_0_30px_rgba(96,165,250,0.5)]"
          >
            Enviar mensaje
          </button>

        </motion.form>

      </div>
    </section>
  );
}
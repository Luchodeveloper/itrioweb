import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY > 20);
  });
}, []);


  return (
    
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 " >
      <div className="flex items-center gap-8 px-8 py-4 rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-[0_0_30px_rgba(0,0,0,0.3)]  ">

        {/* logo */}
        <div className="font-semibold text-white">
          Itrio Studio
        </div>

        {/* links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">

          <a href="#services" className="relative text-gray-300 hover:text-white transition
after:absolute after:w-0 after:h-[1px] after:bg-blue-400 
after:left-0 after:-bottom-1 after:transition-all 
hover:after:w-full">
            Servicios
          </a>

          <a href="#process" className="relative text-gray-300 hover:text-white transition
after:absolute after:w-0 after:h-[1px] after:bg-blue-400 
after:left-0 after:-bottom-1 after:transition-all 
hover:after:w-full">
            Proceso
          </a>

          <a href="#team" className="relative text-gray-300 hover:text-white transition
after:absolute after:w-0 after:h-[1px] after:bg-blue-400 
after:left-0 after:-bottom-1 after:transition-all 
hover:after:w-full">
            Equipo
          </a>

          <a href="#contact" className="relative text-gray-300 hover:text-white transition
after:absolute after:w-0 after:h-[1px] after:bg-blue-400 
after:left-0 after:-bottom-1 after:transition-all 
hover:after:w-full">
            Contacto
          </a>

        </div>

        {/* botón */}
        <button className="hidden md:block px-5 py-2 rounded-lg 
          bg-gradient-to-r from-blue-500 to-purple-500
          text-sm hover:scale-105 transition">
          Empezar
        </button>

      </div>
    </motion.nav>





  );
}
import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-white/10 text-center overflow-hidden">

      {/* glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 
      w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <h3 className="text-white text-lg tracking-wide mb-3">
          Itrio Studio
        </h3>

        <p className="text-gray-500 text-sm mb-10">
          Desarrollo Web • Redes Sociales • Diseño Gráfico
        </p>

        {/* redes */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-10">

          <SocialIcon><FaInstagram /></SocialIcon>
          <SocialIcon><FaLinkedin /></SocialIcon>
          <SocialIcon><FaBehance /></SocialIcon>

        </div>

        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Itrio Studio
        </p>

      </div>
    </footer>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="
      p-3 sm:p-4
      rounded-full 
      bg-white/5 border border-white/10
      text-gray-400 text-base sm:text-lg

      transition-all duration-300
      hover:text-white
      hover:scale-110
      hover:bg-white/10
      hover:shadow-[0_0_25px_rgba(96,165,250,0.6)]
    ">
      {children}
    </div>
  );
}
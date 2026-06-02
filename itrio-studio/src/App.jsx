import ParticlesBackground from "./Componentes/ParticlesBackground"
import Hero from "./Componentes/Hero"
import Services from "./Componentes/Services";
import Process from "./Componentes/Process";
import Team from "./Componentes/Team";
import CTA from "./Componentes/CTA";
import Contact from "./Componentes/Contact.jsx";
import Navbar from "./Componentes/Navbar";
import Projects from "./Componentes/Projects";
import Footer from "./Componentes/Footer.jsx";



function App() {
  return (
    <div className="relative bg-[#020617] text-white overflow-hidden">

      {/* CONTENIDO */}
      <div className="relative z-10">
        <Hero />
        <Navbar />
        <Projects />
        <ParticlesBackground />
        <Services />
        <Process />
        <Team />
        <CTA />
        <Contact />
         <Footer />   
        
      </div>

    </div>
  );
}

export default App;
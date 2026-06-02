 import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: true, zIndex: -1 }, // 🔥 clave

    background: {
      color: "transparent"
    },

    particles: {
      number: { value: 80 },

      color: { value: "#5b7cff" },

      opacity: { value: 0.3 },

      size: { value: 2 },

      move: {
        enable: true,
        speed: 0.5
      },

      links: {
        enable: true,
        color: "#5b7cff",
        distance: 140,
        opacity: 0.2
      }
    }
  }}
/>
     
  );
}
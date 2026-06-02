import { motion } from "framer-motion";

const team = [
  {
    name: "Luciano",
    role: "Desarrollo Web",
    img: "/team1.jpg"
  },
  {
    name: "Victor",
    role: "Desarrollo Web",
    img: "/team2.jpg"
  },
  {
    name: "Nacho",
    role: "Diseño Gráfico",
    img: "/team3.jpg"
  }
];

export default function Team() {
  return (
    <section className="py-32 relative">

      {/* fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2c]/30 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* título */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl text-center font-semibold mb-16"
        >
          Nuestro Equipo
        </motion.h2>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-800"
            >

              {/* imagen */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay oscuro */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* contenido */}
              <div className="absolute bottom-0 p-6 z-10 ">

                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-gray-300 text-sm">
                  {member.role}
                </p>

              </div>

              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/10 blur-2xl"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
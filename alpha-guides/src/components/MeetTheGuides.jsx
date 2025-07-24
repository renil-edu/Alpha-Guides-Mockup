import { motion } from "framer-motion";

const guides = [
  {
    name: "Ms. Kim",
    role: "STEM Passion Mentor",
    why: "I love showing students how coding and robotics can change their world.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mr. Brown",
    role: "Community & Projects Guide",
    why: "Guiding means growing together—every project, every student.",
    img: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    name: "Ms. Torres",
    role: "Arts Empowerment Guide",
    why: "Creative journeys should have inspiration and a little twist of magic.",
    img: "https://randomuser.me/api/portraits/women/56.jpg"
  }
];

export default function MeetTheGuides() {
  return (
    <section className="py-20 px-4 bg-white relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-10 text-center">
          Meet the Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {guides.map((g, i) => (
            <motion.div
              key={g.name}
              className="group bg-[#f2f7ff] rounded-3xl shadow-lg p-8 flex flex-col items-center relative overflow-hidden"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px #0046ff33" }}
            >
              <div className="relative mb-6">
                <img
                  src={g.img}
                  className="w-36 h-36 object-cover rounded-full border-8 border-white shadow-xl group-hover:shadow-blue-300 duration-300"
                  alt={g.name}
                />
                {/* Animated aura */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ opacity: [0.16, 0.30, 0.16], scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{
                    background: "radial-gradient(circle, #0046ff55 40%, transparent 70%)",
                  }}
                ></motion.div>
              </div>
              <h3 className="text-xl font-extrabold text-blue-800 text-center">{g.name}</h3>
              <div className="text-blue-600 font-semibold mb-2">{g.role}</div>
              <p className="text-center text-gray-700 mb-4 min-h-[48px]">
                <span className="font-medium italic">"{g.why}"</span>
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 font-bold text-white px-6 py-2 rounded-full shadow group-hover:scale-105 transition"
                tabIndex={-1}
              >
                See Profile
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

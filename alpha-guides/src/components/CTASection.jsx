import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-r from-[#023cff] to-[#397cff] z-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience the Alpha Difference
        </motion.h2>
        <motion.p
          className="text-lg text-blue-100 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          Connect with a real guide or search by campus. Ready to unlock your child's potential?
        </motion.p>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <a
            href="#"
            className="flex-1 bg-white text-blue-700 font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 transition text-xl"
            style={{ boxShadow: "0 2px 16px #023cff44" }}
          >
            Search Guides by Campus
          </a>
          <a
            href="#"
            className="flex-1 bg-blue-900 text-white font-bold px-8 py-4 rounded-full shadow-md hover:scale-105 hover:bg-blue-700 transition text-xl"
            style={{ boxShadow: "0 2px 16px #023cff44" }}
          >
            Become a Guide
          </a>
        </div>
      </div>
    </section>
  );
}

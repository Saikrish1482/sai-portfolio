import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="text-center pt-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Sai Venkata Krishna Ghattamaneni
        </span>
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600">Data Analyst • AI-Assisted Web Developer</p>
    </motion.div>
  );
}

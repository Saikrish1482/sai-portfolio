import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mt-28 px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-[90%] mx-auto"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center md:text-left text-gray-800 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-gray-700 text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-center md:text-left space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I am a Data Science graduate currently working as a Junior Data Analyst, with a strong passion for building modern, responsive, and efficient software solutions. My experience spans Python (FastAPI, Numpy, Pandas, Machine Learning, API integration), database management with PostgreSQL and MySQL, and data visualization using Power BI, Apache Superset, and Excel. I enjoy turning complex data into actionable insights and creating interactive dashboards and web applications that are both functional and visually appealing. With a focus on clean code, problem-solving, and continuous learning, I strive to combine analytical thinking and creative design to deliver meaningful and impactful solutions.
        </p>
      </motion.div>
    </section>
  );
}

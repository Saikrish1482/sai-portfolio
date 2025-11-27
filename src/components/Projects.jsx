import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Excel Converter Using Python(Microservice)",
    description:
      "This is a Simple Excel Converter with a small Webpage button, connected with my local DB from that it fetches the JSON data and show it in the Excel based the Query we write in the code.",
    repo: "https://github.com/Saikrish1482/Excel_Converter_Using_Python.git",
  },
  {
    id: 2,
    title: "Customer Lifetime Value Prediction",
    description:
      "This is my final year Dissertation Project, Calculating Customer Lifetime Value Using Fusion Algorithms and Predictive Analysis.",
    repo: "https://github.com/Saikrish1482/CLV_Dissertation.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-28 px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-[90%] mx-auto"
    >
      <motion.h3
        className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h3>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg hover:scale-[1.02] transition transform w-full"
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h4>
            <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:scale-105 transition transform"
            >
              View Repo →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

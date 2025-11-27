import { motion } from "framer-motion";
import { FaPython, FaGitAlt, FaRobot } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiApachesuperset } from "react-icons/si";

// Import your SVGs for Power BI and Excel
import PowerBI from "../assets/icons/powerbi.svg";
import Excel from "../assets/icons/excel.svg";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Power BI", icon: <img src={PowerBI} alt="Power BI" className="w-10 h-10" /> },
    { name: "Excel", icon: <img src={Excel} alt="Excel" className="w-10 h-10" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Apache Superset", icon: <SiApachesuperset className="text-red-600" /> },
    { name: "AI Prompting", icon: <FaRobot className="text-purple-400" /> },
  ];

  return (
    <section
      id="skills"
      className="mt-28 px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-[90%] mx-auto"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center md:text-left"
      >
        Skills
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl py-6 flex flex-col items-center gap-3 shadow-md hover:shadow-lg hover:scale-105 transition transform w-full"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-lg font-medium text-gray-800">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

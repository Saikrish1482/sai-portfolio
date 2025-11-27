import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 transition-all">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="text-center py-6 opacity-60 text-sm mt-20">
        © {new Date().getFullYear()} Sai Venkata Krishna Ghattamaneni
      </footer>
    </div>
  );
}

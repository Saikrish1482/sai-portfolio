export default function Contact() {
  return (
    <section id="contact" className="mt-28 px-6 md:px-12 text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contact Me</h3>
      <p className="opacity-70 mb-6 text-gray-600">Let's work together!</p>

      <a
        href="mailto:saikrish1482@gmail.com"
        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition transform inline-block"
      >
        Send Email
      </a>
    </section>
  );
}

import { useState } from "react";
import ResumePDF from "../assets/Sai_Resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-4 bg-white shadow-md sticky top-0 z-40">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            SK
          </span>
        </h2>
      </nav>

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50">

        {/* Floating View Button */}
        {open && (
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-all"
          >
            View Resume
          </a>
        )}

        {/* Floating Download Button */}
        {open && (
          <a
            href={ResumePDF}
            download="Sai_Krish_Resume.pdf"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-all"
          >
            Download
          </a>
        )}

        {/* Main Floating Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-4 rounded-full shadow-lg hover:opacity-90 transition-all"
        >
          {open ? "×" : "Resume"}
        </button>
      </div>
    </>
  );
}

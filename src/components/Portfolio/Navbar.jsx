import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-gray-800 py-4 shadow-md z-10">
      <div className="max-w-6xl mx-auto flex justify-between px-6">
        <i>
          <h1 className="text-3xl font-bold hover:text-yellow-300 duration-300 cursor-pointer">
            My Profile
          </h1>
        </i>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("education")}
              className="text-yellow-300 hover:text-blue-800 duration-300 underline"
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skill")}
              className="text-yellow-300 hover:text-blue-800 duration-300 underline"
            >
              Skill
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("project")}
              className="text-yellow-300 hover:text-blue-800 duration-300 underline"
            >
              Project
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-yellow-300 hover:text-blue-800 duration-300 underline"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

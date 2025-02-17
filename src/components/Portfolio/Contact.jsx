import React from "react";
import { portfolioData } from "./data";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto p-14 text-center">
      <h1 className="text-5xl font-bold text-yellow-300">Contact</h1>

      <div className="flex justify-center gap-8 mt-6">
        <a
          href={portfolioData.contact.github}
          className="text-gray-400 text-4xl"
        >
          <FaGithub />
        </a>
        <a
          href={portfolioData.contact.linkedin}
          className="text-gray-400 text-4xl"
        >
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="text-gray-400 text-4xl"
        >
          <FaEnvelope />
        </a>
        <a
          href={portfolioData.contact.facebook}
          className="text-gray-400 text-4xl"
        >
          <FaFacebook />
        </a>
      </div>

      <a href="https://github.com/toanphangl1997">
        <p className="text-xl underline mt-10 text-blue-600 hover:text-yellow-300 duration-300 ">
          Made With 💖 by ToanPhan ( Dev )
        </p>
      </a>
    </section>
  );
};

export default Contact;

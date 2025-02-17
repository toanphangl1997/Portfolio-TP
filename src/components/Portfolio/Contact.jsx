import React from "react";
import { portfolioData } from "./data";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" bg-[#111322] max-w-4xl mx-auto p-6 sm:py-4 text-center"
    >
      <h1 className="text-4xl font-bold text-yellow-300 mb-4 sm:mb-2 pb-3">
        Contact
      </h1>

      <div className="flex justify-center gap-6 sm:gap-4 mt-4 sm:mt-2">
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
        <p className="text-lg underline mt-6 sm:mt-3 text-blue-600 hover:text-yellow-300 duration-300 pb-2">
          Made With 💖 by ToanPhan ( Dev )
        </p>
      </a>
    </section>
  );
};

export default Contact;

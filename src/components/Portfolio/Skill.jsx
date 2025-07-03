import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiExpress, SiNestjs, SiPrisma } from "react-icons/si";

const Skill = () => {
  return (
    <section
      id="skill"
      className="flex items-center justify-center bg-[#111322] py-10"
    >
      <div className="text-center text-white px-6 lg:px-0">
        <h1 className="text-4xl lg:text-5xl text-yellow-300 font-bold pb-3">
          Skill & Tech
        </h1>
        <p className="text-gray-400 mt-2 p-3 text-xl">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>

        {/* Các icon công nghệ */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 py-3">
          <FaHtml5 className="text-4xl lg:text-5xl text-orange-500" />
          <FaCss3Alt className="text-4xl lg:text-5xl text-blue-500" />
          <FaSass className="text-4xl lg:text-5xl text-pink-400" />
          <FaJs className="text-4xl lg:text-5xl text-yellow-300" />
          <FaReact className="text-4xl lg:text-5xl text-cyan-500" />
          <FaNodeJs className="text-4xl lg:text-5xl text-green-500" />
          <FaDatabase className="text-4xl lg:text-5xl text-gray-500" />
          <SiExpress className="text-4xl lg:text-5xl text-white" />
          <SiNestjs className="text-4xl lg:text-5xl text-red-500" />
          <SiPrisma className="text-4xl lg:text-5xl text-blue-500" />
          <FaLaravel className="text-4xl lg:text-5xl text-red-500" />
          <FaDocker className="text-4xl lg:text-5xl text-blue-500" />
        </div>

        {/* Mô tả công nghệ */}
        <ul className="mt-8 text-lg text-gray-300 space-y-4">
          <li className="px-3 py-2">
            ⚡ Develop highly interactive Front end / User Interfaces for your
            web and mobile applications
          </li>
          <li className="px-3 py-2">
            ⚡ Progressive Web Applications (PWA) in normal and SPA Stacks
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;

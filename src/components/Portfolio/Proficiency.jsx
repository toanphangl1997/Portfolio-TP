import React from "react";
import Lottie from "lottie-react";
import animationData3 from "../../Lottie/Animation3 - 1739779965091.json";

const Proficiency = () => {
  const skills = [
    { name: "Frontend", level: 80 },
    { name: "Backend", level: 60 },
    { name: "Programming", level: 40 },
  ];

  return (
    <section id="proficiency" className="bg-[#111322] text-white py-0">
      <div className="mx-20 px-6 md:px-12 flex flex-col md:flex-row items-center ">
        {/* Left: Skills */}
        <div className="w-full md:w-3/5">
          <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mb-8">
            Proficiency
          </h1>
          {skills.map((skill, index) => (
            <div key={index} className="mb-8">
              <p className="text-xl mb-2 text-gray-400">{skill.name}</p>
              <div className="w-full bg-gray-700 rounded-full h-6">
                <div
                  className="bg-indigo-400 h-6 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Lottie Animation */}
        <div className="w-full md:w-2/5 flex justify-end">
          <Lottie
            animationData={animationData3}
            className="w-[450px] h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Proficiency;

import React from "react";

const Education = () => {
  const educationData = [
    {
      university: "CyberSoft Academy",
      degree: "Fullstack Developer",
      duration: "March 2024 - Present",
      description: "I’m currently learning at CyberSoft Academy.",
      details: [
        "I have been learning frontend since March.",
        "I've been learning Node.js backend since September.",
      ],
      logo: "https://i.imgur.com/lC22izJ.png",
      certification:
        "https://login.cybersoft.edu.vn/certification/?inf=eyJob1RlbiI6IlBoYW4gQ2jDrSBUb8OgbiIsInRlbkxvcCI6IkJvb3RjYW1wIFPDoW5nIDEyIiwidGVuTG9UcmluaCI6IlBST0ZFU1NJT05BTCBGUk9OVC1FTkQgREVWRUxPUEVSIiwiZGllbUN1b2lLaG9hIjo4LjksImlzWHVhdFNhYyI6ZmFsc2UsIm1hQ2h1bmdOaGFuIjoiRkUiLCJpc0luQ2h1bmdOaGFuIjpmYWxzZSwibWFTb0NodW5nTmhhbiI6MjExMywic29UaGFuZ0hvYyI6IjYiLCJuZ2F5Q2FwQ2h1bmdOaGFuIjoiMjAyNC0xMC0xOFQwMzowMDowOCIsImZ1bGxNYUNodW5nTmhhbiI6IkZFLzIwMjQvMjAyNDIxMTMiLCJtYVRob25nVGluSG9jVGFwIjo2MDQwLCJpc0Jhb1ZlQ3VvaUtob2EiOnRydWV9",
    },
    {
      university: "Udemy",
      degree: "JavaScript From Zero to Expert",
      duration: "December 2024 - Present",
      description: "I have got udemy certification.",
      details: [
        "The modern JavaScript course for everyone!",
        "Master JavaScript with projects, challenges and theory. Many courses in one!.",
      ],
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      certification:
        "https://www.udemy.com/certificate/UC-30ae0aff-68b4-41ec-90e1-d1e35c97fb78/",
    },
  ];

  return (
    <section id="education" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-yellow-300 text-center mb-10">
          Education
        </h1>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-14 bg-gray-800 p-10 rounded-lg shadow-lg mb-5"
          >
            <img
              src={edu.logo}
              alt={edu.university}
              className="w-40 h-36 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold">{edu.university}</h2>
              <p className="text-lg font-medium text-gray-300">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              <p className="mt-2 hover:text-yellow-300 duration-300">
                <a href={edu.certification}>{edu.description}</a>
              </p>
              <ul className="text-gray-400 text-sm list-disc pl-5 mt-2">
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

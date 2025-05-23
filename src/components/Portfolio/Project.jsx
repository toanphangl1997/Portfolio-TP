import React from "react";
import imageProject1 from "../../image/Project_Airbnb.png";
import imageProject3 from "../../image/Project_APi_Swagger_Nestjs.png";
import imageProject2 from "../../image/Project_Demo_Ai_Interview.png";

const projects = [
  {
    id: 1,
    title: "Airbnb Clone With React",
    image: imageProject1,
    link: "https://airbnb-clone-pct.vercel.app/",
  },
  {
    id: 2,
    title: "Demo Ai-Interview",
    image: imageProject2,
    link: "https://gitlab.com/ai-agent-noob/ai-interview/-/tree/feature/front-end/frontend?ref_type=heads",
  },
  {
    id: 3,
    title: "API Swagger With NestJS & Prisma",
    image: imageProject3,
    link: "https://github.com/toanphangl1997/BE_NestJS_Airbnb",
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-[#111322] text-white py-9">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-20">
        {/* Tiêu đề */}
        <h1 className="text-5xl sm:text-4xl font-bold text-yellow-300 mb-12 text-center">
          Projects
        </h1>

        {/* Danh sách Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover rounded-lg"
                />
              </a>
              <h2 className="text-xl text-gray-400 font-semibold mt-4">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

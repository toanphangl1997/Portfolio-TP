import React from "react";
import imageProject1 from "../../image/Project_Airbnb.png";
import imageProject2 from "../../image/Project_Disney.png";
import imageProject3 from "../../image/Project_APi_Swagger_Nestjs.png";

const projects = [
  {
    id: 1,
    title: "Airbnb Clone With React",
    image: imageProject1,
    link: "https://airbnb-clone-pct.vercel.app/",
  },
  {
    id: 2,
    title: "Disney Clone With React",
    image: imageProject2,
    link: "https://fe-disney-clone.vercel.app/",
  },
  {
    id: 3,
    title: "Api Swagger With NestJs,Prisma",
    image: imageProject3,
    link: "https://github.com/toanphangl1997/BE_NestJS_Airbnb",
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-gray-900 text-white pt-16 mb-2">
      <div className="mx-28">
        {/* Tiêu đề */}
        <h1 className="text-6xl font-bold text-yellow-300 mb-12 text-center">
          Projects
        </h1>

        {/* Danh sách Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-64 object-cover"
                />
              </a>
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

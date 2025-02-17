import imageProject1 from "../../image/Project_Airbnb.png";
import imageProject2 from "../../image/Project_Disney.png";
import imageProject3 from "../../image/Project_APi_Swagger_Nestjs.png";

export const portfolioData = {
  name: "Toàn Phan",
  role: "Full-Stack Developer",
  about:
    "I'm a passionate full-stack developer specializing in React, Next.js, and Tailwind CSS.",
  description: "",
  skills: ["React", "Node.js", "Tailwind CSS", "MySQL", "NestJS"],
  projects: [
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
  ],
  contact: {
    email: "toanphangl1997@gmail.com",
    github: "https://github.com/toanphangl1997",
    linkedin: "https://www.linkedin.com/in/to%C3%A0n-phan-1a4aa0340/",
    facebook: "https://www.facebook.com/toanphan1997/",
  },
};

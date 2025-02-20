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
  education: [
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
      description: "I have got Udemy certification.",
      details: [
        "The modern JavaScript course for everyone!",
        "Master JavaScript with projects, challenges and theory. Many courses in one!",
      ],
      logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      certification:
        "https://www.udemy.com/certificate/UC-30ae0aff-68b4-41ec-90e1-d1e35c97fb78/",
    },
  ],
  skillProficiency: [
    { name: "Frontend", level: 80 },
    { name: "Backend", level: 60 },
    { name: "Programming", level: 40 },
  ],
};

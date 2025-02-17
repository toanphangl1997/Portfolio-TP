import React from "react";
import Lottie from "lottie-react";
import animationData from "../../Lottie/Animation - 1733675018526.json";
// import animationData2 from "../../Lottie/Animation2 - 1739453598291.json";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center px-10 bg-[#111322]"
    >
      {/* Container chính */}
      <div className="flex flex-row items-center justify-between w-full max-w-[1400px]">
        {/* Phần nội dung bên trái */}
        <div className="w-[50%]">
          <h1 className="text-7xl font-extrabold text-yellow-300 leading-tight">
            Hi all, I'm Toàn Phan 👋
          </h1>
          <p className="text-2xl text-gray-400 mt-6 leading-relaxed">
            A passionate Full Stack Software Developer 🚀 with experience using
            React,Express,Nestjs
          </p>

          {/* Các nút liên kết */}
          <div className="flex gap-6 mt-8">
            <button className="bg-purple-700 hover:bg-white hover:text-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg duration-300">
              Contact Me
            </button>
            <button className="bg-purple-700 hover:bg-white hover:text-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg duration-300">
              Download My CV
            </button>
          </div>
        </div>

        {/* Phần Lottie Animation bên phải */}
        <div className="w-[50%] flex justify-center">
          <Lottie
            animationData={animationData}
            className="w-[650px] h-[650px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

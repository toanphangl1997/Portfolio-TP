import React from "react";
import Lottie from "lottie-react";
import animationData from "../../Lottie/Animation - 1733675018526.json";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 bg-[#111322]"
    >
      {/* Container chính */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1400px]">
        {/* Phần nội dung bên trái */}
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-300 leading-tight">
            Hi all, I'm Toàn Phan 👋
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 mt-6 leading-relaxed">
            A passionate Full Stack Software Developer 🚀 with experience using
            React, Express, NestJS
          </p>

          {/* Các nút liên kết */}
          <div className="flex flex-col lg:flex-row gap-6 mt-8 justify-center lg:justify-start">
            <button className="bg-purple-700 hover:bg-white hover:text-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg duration-300">
              Contact Me
            </button>
            <button className="bg-purple-700 hover:bg-white hover:text-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg duration-300">
              Download My CV
            </button>
          </div>
        </div>

        {/* Phần Lottie Animation bên phải */}
        <div className="w-full lg:w-[50%] flex justify-center mt-8 lg:mt-0">
          <Lottie
            animationData={animationData}
            className="w-[350px] sm:w-[350px] lg:w-[650px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

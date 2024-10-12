import React from "react";
import Typewriter from "typewriter-effect";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills-section">
      <div className=" bg-black w-full h-[130vh] border-b-4 border-purple-500 max-sm:max-h-[100vh] max-lg:max-h-[80vh] max-xl:max-h-[100vh] max-2xl:max-h-[120vh]">
        <h1 className="text-center uppercase text-4xl p-10 font-extrabold bg-gradient-to-r  from-cyan-500 to-green-500 bg-clip-text text-transparent max-2xl:pt-20">
          {" "}
          <Typewriter
            options={{
              strings: ["skills ", "my toolbox"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="grid grid-cols-3 gap-x-20 gap-y-14 justify-center mx-60 mt-10 max-sm:grid-cols-2 max-sm:mx-48 max-sm:gap-x-32 max-sm:gap-y-10 max-md:gap-x-48">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <FaHtml5 className="text-orange-600 text-9xl shadow-[0_6px_25px_rgba(234,88,12,0.9)] hover:scale-110 max-sm:text-8xl" />
            <h1 className="text-white text-2xl mt-4 max-sm:text-xl">HTML</h1>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <FaCss3Alt className="text-blue-600 text-9xl shadow-[0_6px_25px_rgba(2,132,249,0.9)] hover:scale-110 max-sm:text-8xl" />
            <h1 className="text-white text-2xl text-center mt-4 max-sm:text-xl">
              CSS
            </h1>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <SiTypescript className="text-sky-600 text-9xl shadow-[0_6px_25px_rgba(2,132,159,0.9)] hover:scale-110 max-sm:text-8xl" />
            <h1 className="text-white text-2xl text-center mt-4 max-sm:text-xl">
              TypeScript
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <IoLogoJavascript className="text-yellow-400 text-9xl shadow-[0_6px_25px_rgba(250,204,21,0.9)] hover:scale-110 max-sm:text-8xl max-xl:mt-11" />
            <h1 className="text-white text-2xl text-center mt-4 max-sm:text-xl">
              JavaScript
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <RiTailwindCssFill className="text-teal-400 text-9xl shadow-[0_6px_25px_rgba(45,214,191,0.9)] hover:scale-110 max-sm:text-8xl max-xl:mt-11" />
            <h1 className="text-white text-2xl text-center mt-4 max-sm:text-xl">
              Tailwind CSS
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col items-center"
          >
            <RiNextjsFill className="text-slate-200 text-9xl shadow-[0_6px_25px_rgba(226,232,240,0.9)] hover:scale-110 max-sm:text-8xl max-xl:mt-11" />
            <h1 className="text-white text-2xl text-center mt-4 max-sm:text-xl">
              Next.js
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

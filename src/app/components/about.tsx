import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about-section">
      <div className="h-[240vh] w-full  bg-black  flex items-center justify-evenly flex-col border-b-4 border-indigo-500 max-xl:h-auto max-xl:py-14 max-lg:py-8">
        <h1 className="text-center uppercase text-4xl font-extrabold  bg-gradient-to-r  from-blue-800 to-yellow-600 bg-clip-text text-transparent max-lg:p-10 max-xl:p-14">
          <Typewriter
            options={{
              strings: [" About Me", "Discover Amna"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* 1st para */}
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" bg-black p-4 w-1/2 rounded-md   shadow-[0_4px_20px_rgba(255,255,255,0.7)] max-sm:w-auto max-sm:m-8 max-lg:m-10 max-xl:w-9/12 max-xl:m-12"
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-indigo-300 via-purple-600 to-pink-300 bg-clip-text text-transparent max-sm:text-base">
            {" "}
            <Typewriter
              options={{
                strings: [" Creative and Technical Expertise"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6 max-sm:text-sm ">
            I blend creativity and technical expertise to craft visually
            appealing, high-performance websites. Currently, I'm focused on
            mastering modern frameworks like Next.js and Tailwind CSS, staying
            ahead of web development trends. My dedication to continuous
            learning ensures I bring the latest innovations to every project.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className=" bg-black p-6 w-1/2 rounded-md mt-6  shadow-[0_4px_20px_rgba(255,255,255,0.7)] max-sm:w-auto max-sm:m-8 max-lg:m-10 max-xl:w-9/12 max-xl:m-12"
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-pink-300 to-red-700  bg-clip-text text-transparent max-sm:text-base">
            {" "}
            <Typewriter
              options={{
                strings: [" Front-End Development Enthusiast:"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6 max-sm:text-sm">
            I am a passionate and dedicated front-end developer, constantly
            evolving my skills to create visually appealing and user-friendly
            web experiences. Currently, I am honing my expertise in HTML, CSS,
            JavaScript, and modern frameworks to build responsive and dynamic
            websites.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" bg-black p-4 w-1/2 rounded-md   shadow-[0_4px_20px_rgba(255,255,255,0.7)] max-sm:w-auto max-sm:m-8 max-xl:w-9/12 max-xl:m-12 max-lg:m-10"
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-indigo-300 via-purple-600 to-pink-300 bg-clip-text text-transparent">
            {" "}
            <Typewriter
              options={{
                strings: [" Expanding into Cloud and AI:"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6">
            In addition to my journey in front-end development, I am also
            expanding my knowledge in cloud technologies and applied generative
            AI. As I work towards earning a certification in Cloud Applied
            Generative AI, I am excited to integrate cutting-edge AI solutions
            into web development, pushing the boundaries of what’s possible in
            the digital world.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" bg-black p-6 w-1/2 rounded-md   shadow-[0_4px_20px_rgba(255,255,255,0.7)] max-sm:w-auto max-sm:m-8 max-xl:w-9/12 max-xl:m-12 max-lg:m-10"
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-pink-300 to-red-700 bg-clip-text text-transparent">
            {" "}
            <Typewriter
              options={{
                strings: [" Blending Creativity with Innovation:"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6 ">
            I'm excited to continue growing in web development, seeing each
            project as a chance to learn and improve. My goal is to blend
            creative front-end skills with advanced cloud and AI technologies,
            crafting innovative web applications. I'm eager to take on
            challenges that help me become a more proficient developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

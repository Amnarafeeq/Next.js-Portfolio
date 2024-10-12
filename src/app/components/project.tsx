import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Projects = () => {
  return (
    <div id="projects-section">
      <div className="h-full w-full bg-black border-b-4 border-red-700">
        <section className="body-font">
          <div className="container px-5 py-11 mx-auto">
            <div className="mb-12">
              <h1 className="text-center uppercase text-4xl font-extrabold  bg-gradient-to-r from-sky-400 to-amber-600 bg-clip-text text-transparent">
                {" "}
                <Typewriter
                  options={{
                    strings: ["my projects ", "development highlights"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
            <div className="flex flex-wrap">
              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6"
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/Images/cal2.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="  leading-relaxed ">
                      Developed a simple calculator using TypeScript that
                      performs basic arithmetic operations such as addition,
                      subtraction, multiplication, and division.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/simple-calculator"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700 "
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Simple Calculator
                </h1>
              </div>
              {/* pic2 */}
              <div
                data-aos="zoom-in-down"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 border-4 border-black mb-4"
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/guess3.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className=" leading-relaxed">
                      Created a number guessing game using TypeScript where
                      players attempt to guess a randomly generated number
                      within a specified range.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/number-guessing-game"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Number Guessing Game{" "}
                </h1>
              </div>
              {/* pic3 */}

              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 border-4 border-black "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute  inset-0 w-full h-full object-cover object-center "
                    src="/Images/200w.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Created a To-Do app using TypeScript with features like
                      adding, editing, and deleting tasks. Focused on clean
                      code, type safety, and a user-friendly interface
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/cli-todos-app-"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Todo List
                </h1>
              </div>

              {/* pic4 */}

              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 border-4 border-black "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/atm.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Developed an ATM simulation in TypeScript, featuring
                      functionalities like balance inquiry, cash withdrawal and
                      fast cash.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/cli-atm-machine"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  ATM Machine
                </h1>
              </div>

              {/* pic 5 */}

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/count.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Created a countdown timer application with TypeScript,
                      featuring customizable time settings and real-time
                      updates.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/Countdown-Timer"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Countdown Timer
                </h1>
              </div>

              {/* pic 6 */}

              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute bg-slate-400 inset-0 w-full h-full object-cover object-center"
                    src="/Images/exchange.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Built a currency converter application with TypeScript,
                      enabling real-time exchange rate calculations between
                      multiple currencies.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/currency-converter"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Currency Converter
                </h1>
              </div>

              {/* pic 7 */}

              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute  inset-0 w-full h-full object-cover object-center "
                    src="/Images/netflix.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Created a Netflix clone using HTML and CSS, replicating
                      the look and feel of the original site. Focused on layout
                      and styling for a clean, responsive design.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/BNQ-Web-Dev-Work/tree/main/Netflix-Clone"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Netflix Clone
                </h1>
              </div>

              {/* pic 8 */}

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 "
              >
                <div className="flex relative h-64 ">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute  inset-0 w-full h-full object-cover object-center "
                    src="/Images/100days.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Embarked on a '100 Days of Coding' journey with
                      TypeScript, tackling diverse coding challenges
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/-100DaysOfCodingChallenge"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-12">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  100Days of Code
                </h1>
              </div>

              {/* pic 9 */}

              <div
                data-aos="zoom-in-left"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6"
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute  inset-0 w-full h-full object-cover object-center bg-slate-500"
                    src="/Images/panda.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Developed a Foodpanda clone with HTML and CSS, mimicking
                      the app’s layout and design. Focused on creating a
                      responsive, visually appealing interface for a seamless
                      user experience.
                    </p>
                    <Link
                      href="#"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p>View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Foodpanda Clone
                </h1>
              </div>

              {/* pic 10 */}

              <div
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute  inset-0 w-full h-full object-cover object-center bg-orange-300"
                    src="/Images/assignment.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Completed a 45-question assignment in TypeScript,
                      addressing various concepts from basic to advanced.
                      Showcased problem-solving skills and proficiency in
                      type-safe code practices.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/45-Questions-Typescript"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p>View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  45Assignment of Typescript
                </h1>
              </div>

              {/* pic 11 */}

              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                className="lg:w-1/3 sm:w-1/2 p-6 "
              >
                <div className="flex relative h-64">
                  <Image
                    width={1000}
                    height={1000}
                    alt="gallery"
                    className="absolute  inset-0 w-full h-full object-cover object-center"
                    src="/Images/word.gif"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-85 cursor-pointer duration-300">
                    <p className="leading-relaxed">
                      Developed a word counter application using TypeScript,
                      capable of accurately counting words, characters, and
                      sentences in user-provided text.
                    </p>
                    <Link
                      href="https://github.com/Amnarafeeq/word-counter-project"
                      target="_blank"
                      className="text-lg underline font-bold tracking-tight hover:text-pink-700"
                    >
                      <p className="mt-4">View Project On Github</p>
                    </Link>
                  </div>
                </div>
                <h1 className="text-center pt-4 text-2xl bg-gradient-to-r  from-purple-600 to-sky-500 bg-clip-text text-transparent">
                  Word Counter
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;

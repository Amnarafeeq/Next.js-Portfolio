import React from "react";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div id="contact-section">
      <div className="bg-black">
        <section className=" body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-4xl font-extrabold title-font mb-4 bg-gradient-to-r  from-orange-500 to-red-600 bg-clip-text text-transparent uppercase">
                <Typewriter
                  options={{
                    strings: ["contact", "connect with me"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="lg:w-2/3 mx-auto font-bold leading-relaxed text-base bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Your feedback matters; get in touch today!
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                  className="p-4 w-1/2"
                >
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border-2 border-gray-300   rounded-md focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_20px_rgba(245,245,245,0.6)]"
                    />
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  data-aos-duration="3000"
                  className="p-4 w-1/2 "
                >
                  <div className="relative ">
                    <label
                      htmlFor="email"
                      className="leading-7 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full  border-2 border-gray-300  rounded-md  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_20px_rgba(245,245,245,0.6)]"
                    />
                  </div>
                </div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                  className="p-4 w-full"
                >
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_20px_rgba(245,245,245,0.6)] "
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="3000"
                  className="p-4 w-full"
                >
                  <button className="flex mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:scale-105 hover:opacity-85">
                    Send
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                    amnarafeeq68@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

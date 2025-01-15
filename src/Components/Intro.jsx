import React, { useEffect } from "react";
import abc from "../assets/images/abc.png";
import "aos/dist/aos.css";
import AOS from "aos";

function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row" style={{ backgroundColor: "white" }}>
        {/* Left Section */}
        <div className="lg:w-1/2 h-screen flex flex-col items-center justify-center shadow-lg p-4 sm:p-8">
          <div
            className="h-40 w-40 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-white border border-white animate-wiggle shadow-black shadow-2xl"
            style={{
              backgroundImage: `url(${abc})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex flex-wrap text-center lg:text-left text-black mt-3 sm:mt-5 lg:mt-10">
            <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-5xl">BILAL</h1>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-5xl ml-2">AHMED</h1>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-5xl ml-2">KHAN</h2>
          </div>
          <div className="text-black font-serif font-bold text-lg sm:text-xl lg:text-3xl mt-3 sm:mt-5 lg:ml-16">
            <h1>Software Engineer</h1>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="lg:w-1/2 h-screen flex flex-col justify-center shadow-xl p-4 sm:p-8 lg:p-10"
          style={{ backgroundColor: "#908F8B" }}
        >
          <div className="text-center lg:text-left mt-5 sm:mt-10 lg:mt-0">
            <div className="flex justify-center lg:justify-start">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif">ABOUT</h1>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif ml-2 text-white">ME</h1>
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-20" data-aos="fade-down">
              <div className="flex justify-center lg:justify-start">
                <h1 className="text-lg sm:text-xl lg:text-3xl font-serif">I'm</h1>
                <h1 className="text-lg sm:text-xl lg:text-3xl font-serif ml-2 text-white">Bilal</h1>
              </div>
              <h1 className="text-lg sm:text-xl lg:text-3xl font-serif mt-2 text-center lg:text-left">
                MERN Developer
              </h1>
              <p className="text-xs sm:text-sm lg:text-xl font-serif mt-2 text-center lg:text-left max-w-md sm:max-w-lg mx-auto lg:mx-0">
                I am a Website developer with MERN expertise. I am a Computer Science graduate
                from Iqra University. I am very passionate about improving my coding skills & 
                developing websites. I build WebApps and Websites using React Javascript.
              </p>
              <h1 className="text-xs sm:text-sm lg:text-lg font-serif mt-2 text-blue-900">
                Email:{" "}
                <a
                  href="mailto:bilal.ahmed29556@gmail.com"
                  className="text-blue-900 underline"
                >
                  bilal.ahmed29556@gmail.com
                </a>
              </h1>
              <h1 className="text-xs sm:text-sm lg:text-lg font-serif mt-2 text-blue-900">
                Contact: <span>+966 53 235 7386 || +92 3095004216</span>
              </h1>
              <h1 className="text-xs sm:text-sm lg:text-lg font-serif mt-2 text-blue-900">
                Place: Riyadh, Saudi Arabia
              </h1>
              <a
                href="https://drive.google.com/file/d/1YzhdiW17wLzh9s-Ekq9nIjCi-NumcONU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block mt-5"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;

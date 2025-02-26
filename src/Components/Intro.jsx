import React, { useEffect, useState } from "react";
import abc from "../assets/images/abc.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { motion } from "framer-motion";

function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  // Mouse movement state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // State to track which layout to show
  const [isSwapped, setIsSwapped] = useState(false);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // Rotation range (-15 to 15)
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  // Effect to handle side swapping after 0.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSwapped(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1200px" }} // Adding perspective for 3D effect
    >
      {/* Container to manage the swap and prevent overflow */}
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center relative">
        {/* Profile Section */}
        <motion.div
          className="lg:w-1/2 h-screen flex flex-col items-center justify-center transform-style preserve-3d"
          animate={{ 
            left: isSwapped ? "50%" : "0%",
            rotateX: mousePos.y * 0.4,
            rotateY: -mousePos.x * 0.4,
            rotateZ: 0,
          }}
          initial={{
            left: "0%"
          }}
          transition={{ 
            left: { type: "spring", stiffness: 70, damping: 20 },
            rotateX: { type: "spring", stiffness: 80, damping: 10 },
            rotateY: { type: "spring", stiffness: 80, damping: 10 }
          }}
          style={{ 
            position: "absolute",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Profile Image */}
          <motion.div
            className="h-40 w-40 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-white shadow-2xl border-4 border-gray-300"
            style={{
              backgroundImage: `url(${abc})`,
              backgroundSize: "cover",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            animate={{
              rotateX: -mousePos.y * 0.2,
              rotateY: mousePos.x * 0.2,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          ></motion.div>

          {/* Name Aligned in One Line */}
          <motion.h1
            className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl mt-5 text-center text-black"
            animate={{ translateZ: 50 }}
          >
            BILAL AHMED KHAN
          </motion.h1>

          {/* Job Title */}
          <motion.h2
            className="text-lg sm:text-xl lg:text-3xl font-serif font-bold mt-3 text-gray-700"
            animate={{ translateZ: 30 }}
          >
            Software Engineer
          </motion.h2>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="lg:w-1/2 h-screen flex flex-col justify-center items-center lg:items-start p-6 lg:p-12 shadow-2xl rounded-lg transform-style preserve-3d"
          animate={{ 
            left: isSwapped ? "0%" : "50%",
            rotateX: mousePos.y * 0.3,
            rotateY: -mousePos.x * 0.3,
            rotateZ: 0
          }}
          initial={{
            left: "50%"
          }}
          transition={{ 
            left: { type: "spring", stiffness: 70, damping: 20 },
            rotateX: { type: "spring", stiffness: 80, damping: 10 },
            rotateY: { type: "spring", stiffness: 80, damping: 10 }
          }}
          style={{ 
            position: "absolute",
            transformStyle: "preserve-3d"
          }}
        >
          {/* About Me Title */}
          <div className="flex justify-center lg:justify-start">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif">ABOUT</h1>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif ml-2 text-white">ME</h1>
          </div>

          {/* About Me Description */}
          <motion.div className="mt-5 sm:mt-10 lg:mt-16" animate={{ translateZ: 40 }}>
            <p className="text-sm sm:text-lg lg:text-xl font-serif text-center lg:text-left text-gray-900 max-w-md sm:max-w-lg mx-auto lg:mx-0">
              I am a MERN Stack Developer and a Computer Science graduate from Iqra University.
              Passionate about coding, I build high-performance web applications using React,
              JavaScript, and modern technologies.
            </p>

            {/* Contact Information */}
            <motion.div className="mt-5 text-center lg:text-left" animate={{ translateZ: 30 }}>
              <h1 className="text-xs sm:text-sm lg:text-lg font-serif text-blue-900">
                Email:{" "}
                <a href="mailto:bilal.ahmed29556@gmail.com" className="text-blue-900 underline">
                  bilal.ahmed29556@gmail.com
                </a>
              </h1>
              <h1 className="text-xs sm:text-sm lg:text-lg font-serif text-blue-900">
                Contact: <span>+966 53 235 7386 || +92 3095004216</span>
              </h1>
              <h1 className="text-xs sm:text-sm lg:text-lg font-serif text-blue-900">
                Location: Riyadh, Saudi Arabia
              </h1>
            </motion.div>

            {/* Resume Button with 3D Hover Effect */}
            <motion.a
              href="https://drive.google.com/file/d/1YzhdiW17wLzh9s-Ekq9nIjCi-NumcONU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg inline-block mt-5 shadow-lg"
              whileHover={{ scale: 1.1, rotateX: 5, rotateY: 5 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
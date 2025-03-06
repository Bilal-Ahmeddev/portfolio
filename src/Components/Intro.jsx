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

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Start the bouncing animation when component mounts
    setIsAnimating(true);
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30;
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  // Bouncing animation variants
  const bounceVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    },
    static: {
      y: 0
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#2E1760] to-[#7A04EB] overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1200px" }}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center relative">
        {/* Left Section (Profile Image and Name) */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4"
          animate={{
            rotateX: mousePos.y * 0.4,
            rotateY: -mousePos.x * 0.4,
          }}
          transition={{
            rotateX: { type: "spring", stiffness: 80, damping: 10 },
            rotateY: { type: "spring", stiffness: 80, damping: 10 },
          }}
        >
          <div className="relative">
            {/* Bouncy and 3D Animation Container */}
            <motion.div
              className="relative rounded-full h-32 w-32 sm:h-48 sm:w-48 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
              variants={bounceVariants}
              animate={isHovered ? "static" : "bounce"}
              whileHover={{
                scale: 1.05,
                rotateY: 360,
                transition: { 
                  rotateY: { duration: 2, ease: "easeInOut" },
                  scale: { duration: 0.3, ease: "easeOut" }
                }
              }}
              onHoverStart={() => {
                setIsHovered(true);
                setIsAnimating(false);
              }}
              onHoverEnd={() => {
                setIsHovered(false);
                setTimeout(() => setIsAnimating(true), 500);
              }}
              style={{ 
                transformStyle: "preserve-3d",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              {/* Front face (Image) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white shadow-2xl border-4 border-[#FFB800]"
                style={{
                  backgroundImage: `url(${abc})`,
                  backgroundSize: "cover",
                  backfaceVisibility: "hidden",
                  zIndex: isHovered ? 0 : 1
                }}
              >
                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(255, 184, 0, 0)",
                      "0 0 15px rgba(255, 184, 0, 0.7)",
                      "0 0 0 rgba(255, 184, 0, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.div>
              
              {/* Back face (can be another image or content) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#190B33] shadow-2xl border-4 border-[#00F0FF] flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  zIndex: isHovered ? 1 : 0
                }}
              >
                <div className="text-center p-4" >
                  <h3 className="text-[#FFB800] font-bold text-sm sm:text-base lg:text-lg xl:text-xl">Full Stack Developer</h3>
                  <p className="text-white text-xs sm:text-sm lg:text-base mt-2">React • Node • MongoDB • Express</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.h1
            className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-5 text-center text-white"
            animate={{ translateZ: 50 }}
          >
            BILAL AHMED KHAN
          </motion.h1>

          <motion.h2
            className="text-base sm:text-lg lg:text-xl xl:text-2xl font-serif font-bold mt-3 text-[#FFB800]"
            animate={{ translateZ: 30 }}
          >
            Software Engineer
          </motion.h2>
        </motion.div>

        {/* Right Section (About Me) */}
        <motion.div
          className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center p-6 bg-[#190B33] shadow-2xl rounded-lg"
          animate={{
            rotateX: mousePos.y * 0.3,
            rotateY: -mousePos.x * 0.3,
          }}
          transition={{
            rotateX: { type: "spring", stiffness: 80, damping: 10 },
            rotateY: { type: "spring", stiffness: 80, damping: 10 },
          }}
          data-aos="fade-left"
        >
          <div className="flex justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-white">ABOUT</h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif ml-2 text-[#00F0FF]">ME</h1>
          </div>

          <p className="text-sm sm:text-base lg:text-lg font-serif text-center text-white max-w-md sm:max-w-lg mx-auto mt-5">
            I am a MERN Stack Developer and a Computer Science graduate from Iqra University.
            Passionate about coding, I build high-performance web applications using React,
            JavaScript, and modern technologies.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1YzhdiW17wLzh9s-Ekq9nIjCi-NumcONU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#00F0FF] to-[#00BFFF] text-[#190B33] font-bold py-2 px-6 rounded-lg mt-5 shadow-lg"
            whileHover={{ scale: 1.1, rotateX: 5, rotateY: 5 }}
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
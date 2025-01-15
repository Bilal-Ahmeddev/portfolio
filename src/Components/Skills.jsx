import React, { useEffect } from "react";
import "../index.css";
import "aos/dist/aos.css";
import AOS from "aos";

const data = [
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-html5-logo-icon-download-in-svg-png-gif-file-formats--html-wordmark-programming-langugae-language-pack-logos-icons-1175209.png?f=webp&w=256",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
  },
  {
    image: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    image: "https://img.icons8.com/color/512/sass.png",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/1183/1183672.png",
  },
  {
    image: "https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg",
  },
  {
    image: "https://img.icons8.com/color/512/express-js.png",
  },
  {
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png",
  },
  {
    image: "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-512.png",
  },
];

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div
      className="w-full h-auto bg-cover bg-center bg-opacity-10 backdrop-blur-md border border-white/20 p-4 sm:p-8"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63613.jpg')`,
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-200 animate-bounce">
          SKILLS
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
        {data.map((obj, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            data-aos="fade-down"
          >
            <img
              src={obj.image}
              alt="Skill"
              className="h-12 xs:h-14 sm:h-20 md:h-24 lg:h-28 xl:h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

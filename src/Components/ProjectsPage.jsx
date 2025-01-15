import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import coffee from '../assets/images/coffee.png'
import furn from '../assets/images/furn.png'
import gym from '../assets/images/gym.png'

const projects = [
  {
    title: "Grilliz Coffee Shop",
    description: "A dynamic coffee shop website with menu filtering, online ordering, and secure user authentication.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    image: coffee,
    link: "#",
  },
  {
    title: "Alphalete Fitness App",
    description: "A fitness web app with workout tracking, diet plans, and a supplement store to enhance user engagement.",
    tech: ["React.js", "Redux", "Material UI"],
    image: gym,
    link: "#",
  },
  {
    title: "E-Commerce Furniture Store",
    description: "An e-commerce platform for furniture sales, with category filtering and a seamless shopping experience.",
    tech: ["React.js", "MongoDB", "Node.js"],
    image: furn,
    link: "#",
  },
];

function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 py-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 animate-pulse">My Projects</h1>
        <p className="text-lg text-gray-400">A showcase of my latest work and accomplishments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-xs font-medium py-1 px-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../../../public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="p-5">
      <div className="bg-white py-6  px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <FaSearch className="absolute right-3 bottom-4 text-xl"></FaSearch>
            <input
              className="bg-gray-200 rounded-md text-xl py-3 pl-2 pr-10 outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="flex gap-7">
            <button className="text-xl font-semibold rounded-md py-3 px-8 cursor-pointer bg-gray-300">
              Type
            </button>
            <button className="text-xl font-semibold rounded-md py-3 px-8 text-blue-700 text bg-gray-300 ">
              Store
            </button>
          </div>
        </div>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
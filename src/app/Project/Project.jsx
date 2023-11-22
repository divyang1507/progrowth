import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "../components/ProjectCard";
const Project = () => {
  return (
    <div className="" id="Project">
      <div className="w-full text-4xl text-center pb-5">Project</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="md:col-span-2 lg:col-span-3">
          <ProjectCard />
        </div>
        <div className="col-span-1">
          <ProjectCard />
        </div>
        <div className="col-span-1">
          <ProjectCard />
        </div>
        <div className="col-span-1">
          <ProjectCard />
        </div>
      </div>
        </div>
  );
};

export default Project;

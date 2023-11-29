import React from "react";
import { Link } from "react-router-dom";

interface ProjectProps {
  data: {
    projects: {
      year: number;
      name: string;
      description: string;
      techStacks: string;
      url: string;
    }[];
  };
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  return data.projects.map((project, index) => (
    <div key={index} className="md:flex justify-between my-10">
      <div className="w-10/12">
        <div className="flex items-center">
          <div className="w-8 md:w-36 h-0.5 bg-black" />
          <h1 className="text-base md:text-xl mx-2 md:mx-6 font-mono">
            {project.year}
          </h1>
          <h1 className="text-xl md:text-3xl font-bold font-mono">
            {project.name}
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="ml-10 md:ml-60">
            <p className="leading-8 md:leading-10 font-[Helvetica Neue] font-normal antialiased text-base md:text-xl">
              {project.description}
            </p>
            <p className="leading-8 md:leading-10 text-sm md:text-lg font-extralight">
              {project.techStacks}
            </p>
          </div>
        </div>
      </div>
      <div className="ml-10 md:w-1/4 flex md:items-center md:justify-center">
        {project.name === "WhatsApp Chatbot" ? (
          <Link
            className="flex items-center justify-center cursor-pointer hover:font-bold"
            to="/project/wa-chatbot"
          >
            <div className="bg-[#D9D9D9] rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
            <p className="-ml-[25px] mr-2 font-mono text-sm md:text-lg">View Details</p>
            <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
          </Link>
        ) : (
          <div
            className="flex items-center justify-center cursor-pointer hover:font-bold"
            onClick={() => {
              window.open(project.url, "_blank");
            }}
          >
            <div className="bg-[#D9D9D9] rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
            <p className="-ml-[25px] mr-2 font-mono text-sm md:text-lg">Visit Website</p>
            <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
          </div>
        )}
      </div>
    </div>
  ));
};

export default Project;

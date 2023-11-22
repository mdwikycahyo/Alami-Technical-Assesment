import Link from "next/link";
import React from "react";

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
    <div key={index} className="flex justify-between my-10">
      <div className="w-10/12">
        <div className="flex items-center">
          <div className="w-36 h-0.5 bg-black" />
          <h1 className="text-xl mx-6 font-mono">{project.year}</h1>
          <h1 className="text-3xl font-bold font-mono">{project.name}</h1>
        </div>
        <div className="flex justify-between">
          <div className="ml-60">
            <p className="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">
              {project.description}
            </p>
            <p className="leading-10 text-lg font-extralight">
              {project.techStacks}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        {project.name === "WhatsApp Chatbot" ? (
          <Link
            className="flex items-center justify-center cursor-pointer hover:font-bold"
            href="/project/wa-chatbot"
          >
            <div className="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
            <p className="-ml-[25px] mr-2 font-mono">View Details</p>
            <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
          </Link>
        ) : (
          <div
            className="flex items-center justify-center cursor-pointer hover:font-bold"
            onClick={() => {
              window.open(project.url, "_blank");
            }}
          >
            <div className="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
            <p className="-ml-[25px] mr-2 font-mono">Visit Website</p>
            <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
          </div>
        )}
      </div>
    </div>
  ));
};

export default Project;

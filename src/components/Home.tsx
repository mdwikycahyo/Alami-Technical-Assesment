import React from "react";

interface HomeProps {
  data: {
    username: string;
    summary: string;
    linkedin: string;
    github: string;
    medium: string;
  };
}
const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl font-bold leading-normal font-mono">
        Hi, I'm {data.username}!
      </h1>
      <p
        className="md:leading-10 text-lg md:text-xl"
        dangerouslySetInnerHTML={{ __html: data.summary }}
      />
      <div className="mt-4">
        <i
          className="bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer"
          onClick={() => window.open(data.linkedin, "_blank")}
        />
        <i
          className="bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5"
          onClick={() => window.open(data.github, "_blank")}
        />
        <i
          className="bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer"
          onClick={() => window.open(data.medium, "_blank")}
        />
      </div>
    </div>
  );
};

export default Home;

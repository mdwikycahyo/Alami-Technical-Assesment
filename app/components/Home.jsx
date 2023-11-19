const Home = (props) => {
  const { data } = props;
  return (
    <div>
      <h1 className="text-6xl font-bold leading-normal font-mono">
        Hi, I'm {data.username}!
      </h1>
      <p
        className="leading-10 text-xl"
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

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
        <i className="bi bi-linkedin text-3xl" />
        <i className="bi bi-github text-3xl mx-5" />
        <i className="bi bi-medium text-3xl" />
      </div>
    </div>
  );
};

export default Home;

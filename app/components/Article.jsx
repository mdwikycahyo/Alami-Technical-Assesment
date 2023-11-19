const Article = (props) => {
  const { data } = props;
  return data.articles.map((article, index) => (
    <div key={index} className="flex justify-between my-14">
      <div className="w-10/12">
        <div className="flex items-center">
          <div className="w-36 h-0.5 bg-black" />
          <h1 className="text-xl mx-6 font-mono">{article.date}</h1>
        </div>
        <div className="flex justify-between">
          <div className="ml-[167px]">
            <h1 className="text-3xl leading-relaxed font-bold font-mono">
              {article.name}
            </h1>
            <p className="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">
              {article.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <div
          className="flex items-center justify-center cursor-pointer hover:font-bold"
          onClick={() => {
            window.open(article.url, "_blank");
          }}
        >
          <div className="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
          <p className="-ml-[25px] mr-2 font-mono">Read More</p>
          <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
        </div>
      </div>
    </div>
  ));
};

export default Article;

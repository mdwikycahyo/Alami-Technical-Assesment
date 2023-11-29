import React from "react";

interface ArticleProps {
  data: {
    articles: {
      date: string;
      name: string;
      description: string;
      url: string;
    }[];
  };
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <>
      {data.articles.map((article, index) => (
        <div key={index} className="md:flex justify-between my-14">
          <div className="w-10/12">
            <div className="flex items-center">
              <div className="w-8 md:w-36 h-0.5 bg-black" />
              <h1 className="text-base md:text-xl mx-2 md:mx-6 font-mono">
                {article.date}
              </h1>
            </div>
            <div className="flex justify-between">
              <div className="ml-10 md:ml-[167px]">
                <h1 className="text-xl md:text-3xl md:my-3 font-bold font-mono">
                  {article.name}
                </h1>
                <p className="leading-8 md:leading-10 font-[Helvetica Neue] font-normal antialiased text-base md:text-xl">
                  {article.description}
                </p>
              </div>
            </div>
          </div>
          <div className="ml-10 md:w-1/4 flex md:items-center md:justify-center">
            <div
              className="flex items-center justify-center cursor-pointer hover:font-bold"
              onClick={() => {
                window.open(article.url, "_blank");
              }}
            >
              <div className="bg-[#D9D9D9] rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
              <p className="-ml-[25px] mr-2 font-mono text-sm md:text-lg">
                Read More
              </p>
              <i className="bi bi-arrow-right text-yellow-500 text-3xl" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;

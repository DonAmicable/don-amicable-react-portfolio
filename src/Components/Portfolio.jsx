import React from "react";
import { asset } from "../assets/Assets";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      name: asset.nodeJsImage,
    },
    {
      id: 2,
      name: asset.nextJsImage,
    },
    {
      id: 3,
      name: asset.reactImage,
    },
    {
      id: 4,
      name: asset.tailwinsCssImage,
    },
    {
      id: 5,
      name: asset.HtmlImage,
    },
    {
      id: 6,
      name: asset.GitHubImage,
    },
    {
      id: 7,
      name: asset.nextJsLogo,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#0F0A1F] to-[#1E1533] text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#7C3AED] ">
            portfolio
          </p>
          <p className="py-6 text-xl text-gray-400">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3   gap-8 px-4 sm:px-0 ">
          {portfolio.map(({ id, name }) => (
            <div key={id} className="shadow-md shadow-[#7C3AED]/20  rounded-lg">
              <img
                src={name}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full "
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-[#A78BFA]">
                  {" "}
                  react
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-[#A78BFA]">
                  {" "}
                  Demon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
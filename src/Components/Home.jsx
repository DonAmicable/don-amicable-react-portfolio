// import React from 'react'
import { asset } from "../assets/Assets";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#0F0A1F] via-[#1E1533] to-[#2D1B4E]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:7xl font-bold text-white">
            I`m a full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I am a passionate full-stack developer with a love for building
            dynamic, user-centric web applications. My journey in the tech
            world began with a curiosity for how things work under the hood,
            which quickly grew into a career driven by innovation and a
            desire to create seamless digital experiences.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] cursor-pointer group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 duration-500"
            >
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mb-20 md:ml-24">
          <img
            src={asset.profile6}
            alt="my profile"
            className="rounded-2xl mx-auto w-full hover:scale-90 duration-700 md:w-full h-60 -z-20 ring-2 ring-[#7C3AED]/20"
          />
          <h1 className="text-center text-xl mt-4 font-bold text-white">
            Don Amicable
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
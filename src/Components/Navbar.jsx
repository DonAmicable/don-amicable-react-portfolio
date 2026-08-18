import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-[#150F26]/85 backdrop-blur-md fixed px-4 z-50 border-b border-[#7C3AED]/20 shadow-[0_1px_20px_-5px_rgba(124,58,237,0.35)]">
      <Link
        to="home"
        smooth
        duration={1000}
        className="text-5xl font-logoFont ml-2 z-10 cursor-pointer bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent"
      >
        Amicable
      </Link>

      {/* desktop view */}

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="relative px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-white duration-200 group"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <span className="absolute left-4 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] group-hover:w-[calc(100%-2rem)] duration-300"></span>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 hover:text-[#A78BFA] duration-200 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#150F26]/95 backdrop-blur-md text-gray-300 md:hidden">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-[#A78BFA] text-4xl py-2 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
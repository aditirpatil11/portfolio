import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { PROFILE } from "../../utils/data";
import { NAVBAR_LINKS } from "../../utils/data";
import { NAV_LINKS } from "../../utils/data";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle((prev) => !prev);
  };

  const closeMenu = () => setNavToggle(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="z-50 fixed top-0 left-0 w-full h-16 lg:h-20 xl:h-22 bg-transparent px-4 lg:px-20">
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Left - Logo */}
          <div className="w-full lg:w-[20%] h-full ">
            {PROFILE.map(({ name, place }) => (
              <div
                key={name}
                className="h-full flex flex-col items-start justify-center"
              >
                <h3 className="overflow-hidden text-base lg:text-xl backdrop-blur-lg rounded px-1">
                  {name}
                </h3>
                <h3 className="overflow-hidden text-sm lg:text-base text-zinc-300 backdrop-blur-lg rounded px-1">
                  {place}
                </h3>
              </div>
            ))}
          </div>

          {/* Center - Links */}
          <ul className="hidden bg-zinc-600/30 backdrop-blur-lg text-sm border-2 border-zinc-700/30 rounded-full xl:flex items-center gap-2 px-0 py-2">
            {NAVBAR_LINKS.map(({ name, link }, index) => (
              <li key={index}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full transition-colors duration-300 ${
                      isActive
                        ? "bg-white text-black"
                        : "text-zinc-200 hover:text-black hover:bg-white"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right - Buttons */}
          <div className="w-[20%] h-full flex items-center justify-end">
            <Link to="/contact">
              <button className="hidden cursor-pointer text-purple-200 hover:text-black backdrop-blur-lg bg-transparent hover:bg-white hover:scale-95 border-2 border-purple-200 rounded-full xl:flex items-center justify-center px-4 py-2 transition duration-300">
                <h3>Contact Me</h3>
              </button>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={handleToggle}
              className="xl:hidden cursor-pointer bg-transparent backdrop-blur-lg hover:bg-purple-200/70 hover:scale-95 border-2 border-purple-200 rounded-full flex items-center justify-center px-4 py-2 transition duration-300"
            >
              <LuMenu size={22} className="text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`z-100 fixed top-0 right-0 w-full md:w-1/2 lg:w-1/3 h-screen bg-black/30 backdrop-blur-2xl flex flex-col justify-evenly transform transition-transform duration-300 ${
          navToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="w-full h-2/3 text-xl uppercase flex flex-col items-center justify-center gap-4">
          {NAV_LINKS.map(({ name, link }) => (
            <li key={name}>
              <Link
                to={link}
                onClick={closeMenu}
                className="text-white hover:text-black rounded-full px-4 py-2 transition-colors duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center justify-center">
          <button
            onClick={handleToggle}
            className="text-white border-2 rounded-full p-2"
          >
            <IoCloseSharp size={25} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

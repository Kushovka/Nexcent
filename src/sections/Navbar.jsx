import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/IconRel.svg";
import arrowRight from "../assets/arrowRight.svg";
import { navItems } from "../constants";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
import { mc } from "../constants/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="w-full bg-white md:bg-transparent top-0 left-0 right-0">
      <nav
        className={mc(
          "fixed w-5/6 rounded-xl py-6 pr-7 pl-7 lg:pr-14 z-50 lg:pl-24 left-1/2 -translate-x-1/2  transition-all duration-300",
          isScrolled ? "w-full py-5  bg-white/30 backdrop-blur-lg shadow-md" : "py-8"
        )}
      >
        <div className="flex justify-between items-center">
          {/* logo */}
          <a
            href="#home"
            className="text-3xl font-bold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-[#263238]">Nexcent</span>
          </a>
          {/* nav items */}
          <div className="flex items-center justify-center lg:gap-12 gap-8">
            <ul className="md:flex space-x-3 lg:space-x-8 hidden">
              {navItems.map((navItem) => (
                <Link
                  to={navItem.href}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={navItem.href}
                  className={mc(
                    "relative inline-block text-lg text-Gray-900 tracking-wide hover:text-brand-primary first:font-medium transition-all duration-300 cursor-pointer ",
                    isScrolled
                      ? "text-Gray-900/80 hover:text-Gray-900 transition-all duration-500 underline-offset-4"
                      : "",
                    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-brand-primary after:transition-all after:duration-500 hover:after:w-full"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
            </ul>

            {/* btn */}
            <div>
              <button className="bg-brand-primary text-white lg:py-2.5 lg:px-6 py-1.5 px-4 transition-all duration-300 rounded hover:bg-neutral-d-gray hidden md:flex gap-1 whitespace-nowrap">
                Register Now
                <img src={arrowRight} className="size-6 text-white" />
              </button>
            </div>
          </div>

          {/* menu mobile */}
          <div className="md:hidden flex w-1/4">
            <button
              onClick={toggleMenu}
              className="text-neutral-d-gray focus:outline-none focus:text-gray-500"
            >
              {menuOpen ? (
                <FaXmark className="h-6 w-6 " />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>
        </div>

        {/* items mobile */}
        <div
          className={mc(
            "fixed flex flex-col space-y-4 px-4 mt-16 py-7 shadow-lg md:hidden z-[60]",
            menuOpen
              ? " bg-white top-0 right-0 left-0 h-screen opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((navItem, i) => (
            <Link
              to={navItem.href}
              spy={true}
              smooth={true}
              offset={-100}
              key={navItem.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base text-gray-950 hover:text-brand-primary first:font-medium"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

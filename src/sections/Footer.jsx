import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import Logo from "../assets/LogoWhite.svg";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

import { footerCompanes, footerSupports } from "../constants";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <footer className="bg-neutral-black" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.2 }}
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center "
      >
        <div className="py-6 md:py-8 lg:py-12 md:px-12 space-y-12">
          <img src={Logo} width={200} alt="" />
          <div className="flex flex-col items-center justify-center">
            <span className="text-neutral-silver ">
              Copyright © {new Date().getFullYear()} Landify UI Kit.
            </span>
            <span className="text-neutral-silver ">All rights reserved</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-grey-blue/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-grey-blue/30">
              <FaInstagram className="size-7 text-white" />
            </div>
            <div className="bg-grey-blue/20 rounded-full w-12 h-12 flex items-center justify-center  transition-all duration-300 hover:bg-grey-blue/30">
              <FaTwitter className="size-6 text-white" />
            </div>
            <div className="bg-grey-blue/20 rounded-full w-12 h-12 flex items-center justify-center  transition-all duration-300 hover:bg-grey-blue/30">
              <FaYoutube className="size-7 text-white" />
            </div>
            <div className="bg-grey-blue/20 rounded-full w-12 h-12 flex items-center justify-center  transition-all duration-300 hover:bg-grey-blue/30">
              <FaLinkedin className="size-7 text-white" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-y-8">
          <div className="flex items-center justify-center space-x-20">
            <div className="space-y-4">
              <h1 className="text-white text-xl md:text-2xl">Company</h1>
              <div className="flex flex-col space-y-2">
                {footerCompanes.map((footerCompany, index) => (
                  <div key={index} className="cursor-pointer">
                    <p className="text-neutral-silver/80 text-base hover:text-neutral-50 transition-colors duration-300">
                      {footerCompany.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-white text-xl md:text-2xl">Support</h1>
              <div className="flex flex-col space-y-2">
                {footerSupports.map((footerSupport, index) => (
                  <div className="cursor-pointer" key={index}>
                    <p className="text-neutral-silver/80 text-base hover:text-neutral-50 transition-colors duration-300">
                      {footerSupport.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pb-12 px-12">
            <h1 className="text-white text-xl md:text-2xl">Stay up to date</h1>
            <div className="relative w-full">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-grey-blue/30 focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Your email address"
              />
              <a href="#">
                <TbBrandTelegram className="absolute right-2 size-8 text-white bottom-2" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import arrowRight from "../assets/arrowRight.svg";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <section id="demo" className="bg-neutral-silver" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto flex flex-col py-6 md:py-8 lg:py-12 justify-center items-center md:gap-12 gap-8"
      >
        <div className="flex items-center justify-center md:w-1/2 w-2/3 text-center">
          <h1 className="text-3xl md:text-6xl font-medium text-neutral-d-gray">
            Pellentesque suscipit fringilla libero eu.
          </h1>
        </div>
        <div>
          <button className="bg-green-500 text-white md:px-5 md:py-3 px-3 py-2 rounded hover:bg-neutral-d-gray transition-all duration-300 flex items-center justify-center gap-1">
            Get a Demo
            <img src={arrowRight} className="size-6 text-white" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import LogoCarousel from "../components/LogoCarousel";


const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.8,
  });
  return (
    <section className=" overflow-hidden py-6 lg:py-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl mx-auto px-4 lg:px-14 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-2xl lg:text-5xl text-neutral-d-gray font-semibold">
            Our Clients
          </h1>
          <p className="text-sm lg:text-base text-neutral-gray">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <LogoCarousel />
      </motion.div>
    </section>
  );
};

export default Clients;

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import imgCalender from "../assets/calender/imgCalender.svg";

const Calender = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section ref={ref}>
      <div className="max-w-screen-xl mx-auto py-6 md:py-8 lg:py-20 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pr-8"
          >
            <img src={imgCalender} alt="imgUnlock" className="w-full" />
          </motion.div>
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="md:w-3/5 w-5/6 text-center md:text-left space-y-8 py-3 px-5"
          >
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl text-neutral-d-gray font-semibold ">
                How to design your site footer like we did
              </h1>
              <p className="text-sm lg:text-base text-neutral-gray">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <button
              type="button"
              className="bg-brand-primary text-white py-2.5 px-6 transition-all duration-300 rounded hover:bg-neutral-d-gray"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calender;

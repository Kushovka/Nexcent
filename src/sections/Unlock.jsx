import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import imgUnlock from "../assets/unlock/imgUnlock.svg";

const Unlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section ref={ref}>
      <div className="max-w-screen-xl mx-auto py-6 md:py-8 lg:py-12 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pr-8"
          >
            <img src={imgUnlock} alt="imgUnlock" className="w-full" />
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
                The unseen of spending three years at Pixelgrade
              </h1>
              <p className="text-sm lg:text-base text-neutral-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
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

export default Unlock;

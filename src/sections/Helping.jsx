import { helpingItems } from "../constants";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Helping = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });
  return (
    <section className="bg-neutral-silver" id="impact" ref={ref}>
      <div className="max-w-screen-xl mx-auto block md:flex items-center md:justify-between py-6 md:py-8 lg:py-12 px-8">
        {/* rigth */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start justify-center gap-4 py-12"
        >
          <h1 className="text-3xl md:text-5xl text-neutral-d-gray text-center md:text-left">
            Helping a local <br />
            <span className="text-3xl md:text-5xl text-brand-primary">
              business reinvent itself
            </span>
          </h1>
          <p className="text-base md:text-lg text-Gray-900 text-center">
            We reached here with our hard work and dedication
          </p>
        </motion.div>

        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center"
        >
          {helpingItems.map((helpingItem, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <div>
                <img
                  src={helpingItem.imgPath}
                  className="size-14 w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-0">
                <h2 className="text-neutral-d-gray text-2xl md:text-3xl font-semibold">
                  <CountUp
                    start={0}
                    end={helpingItem.number}
                    duration={1.5}
                    useEasing={false}
                    formattingFn={(num) => {
                      if (num >= 1_000_000)
                        return (num / 1_000_000).toFixed(1) + "M+";
                      if (num >= 1_000) return (num / 1_000).toFixed(1) + "K+";
                      return num.toString() + "+";
                    }}
                  />
                </h2>
                <p className="text-neutral-gray">{helpingItem.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Helping;

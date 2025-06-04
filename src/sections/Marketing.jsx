import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { marketingItems } from "../constants";

import { HiArrowNarrowRight } from "react-icons/hi";

const Marketing = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
  });
  return (
    <section ref={ref}>
      <div className="max-w-screen-xl mx-auto flex flex-col py-6 md:py-8 lg:py-12 relative">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-2xl md:text-4xl text-neutral-d-gray font-medium">
              Caring is the new marketing
            </h1>
            <p className="text-sm md:text-base text-neutral-gray w-4/5 md:w-1/2">
              The Nextcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.​
            </p>
          </div>
        </motion.div>
        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-between py-8 md:py-6 px-6 md:px-8">
          {marketingItems.map((marketingItem, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 0.3,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="mx-auto relative mb-12"
              key={index}
            >
              <img src={marketingItem.imgPath} className="w-full h-80" alt="" />

              <div className="text-center px-4 py-8 bg-white transform transition-transform duration-300 hover:scale-110 shadow-lg rounded-md mx-auto absolute left-0 right-0 -bottom-12 w-3/4 cursor-pointer">
                <h2 className="text-lg font-medium text-center text-neutral-gray">
                  {marketingItem.description}
                </h2>
                <div className="flex items-center justify-center">
                  <a
                    href=""
                    className="text-brand-primary/70 hover:text-brand-primary transition-colors duration-300 text-base font-medium inline-flex items-center mt-3 gap-1"
                  >
                    Readmore
                    <HiArrowNarrowRight className="size-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;

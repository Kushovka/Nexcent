import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { communityCards } from "../constants";

const Community = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <section id="clients" ref={ref}>
      <div className="max-w-screen-xl mx-auto py-4 md:py-8 lg:py-12 px-4 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <h1 className="text-2xl lg:text-5xl text-neutral-d-gray font-semibold text-center">
            Manage your entire community
            <br /> in a single system
          </h1>
          <p className="text-sm lg:text-base text-neutral-gray">
            Who is Nextcent suitable for?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{
            duration: 0.3,
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8 py-8 cursor-pointer"
        >
          {communityCards.map((communityCard, index) => (
            <div
              className="bg-white w-3/5 md:w-4/5 mx-auto rounded-lg drop-shadow-md hover:scale-110 hover:drop-shadow-xl transform transition-transform duration-300"
              key={communityCard.id}
            >
              <div className="flex flex-col items-center text-center justify-center space-y-8 px-6 py-6">
                <img src={communityCard.imgPath} className="size-24" alt="" />
                <h2 className="text-2xl lg:text-4xl text-neutral-d-gray font-semibold">
                  {communityCard.title}
                </h2>
                <p className="text-sm lg:text-base text-neutral-gray">
                  {communityCard.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Community;

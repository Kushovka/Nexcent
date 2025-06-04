import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { customerItems } from "../constants";

import { HiArrowNarrowRight } from "react-icons/hi";
import customerImg from "../assets/customer/customerImg.svg";

const Customer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  return (
    <section className="bg-neutral-silver" id="feedback" ref={ref}>
      <div className="max-w-screen-xl mx-auto block md:flex items-center justify-center md:justify-between py-6 md:py-8 lg:py-12 px-8 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex items-center justify-center"
        >
          <img src={customerImg} width={350} alt="" />
        </motion.div>

        <div className="flex flex-col text-center md:text-left md:items-start items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{
              duration: 0.5,
              delay: 0 * 0.3,
            }}
          >
            <p className="text-sm md:text-base text-neutral-gray pb-4 md:pb-8">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{
              duration: 0.5,
              delay: 1 * 0.3,
            }}
            className="space-y-2"
          >
            <h1 className="text-xl md:text-2xl text-brand-primary">
              Tim Smith
            </h1>
            <h2 className="text-base md:text-lg text-l-grey">
              British Dragon Boat Racing Association
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{
              duration: 0.3,
              delay: 2 * 0.3,
            }}
            className="md:flex block gap-8"
          >
            <div className="grid grid-cols-3 md:flex items-center justify-center py-2 gap-8 md:gap-4">
              {customerItems.map((customerItem, index) => (
                <div className="flex items-center justify-center" key={index}>
                  <img
                    src={customerItem.imgPath}
                    className="w-full md:size-28 size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="flex w-3/4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 text-lg text-brand-primary/70 hover:text-brand-primary transition-colors duration-300"
              >
                Meet all customers
                <HiArrowNarrowRight className="size-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Customer;

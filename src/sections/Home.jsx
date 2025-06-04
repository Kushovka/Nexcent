import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect, useRef, useState } from "react";

import heroImg from "../assets/heroImg.svg";
import heroImg1 from "../assets/heroImg1.png";
import heroImg2 from "../assets/heroImg2.webp";
import arrowRight from "../assets/arrowRight.svg";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-neutral-silver" id="home" ref={ref}>
      <div className="px-4 lg:px-14 py-4 md:py-16 lg:py-24 max-w-screen-2xl mx-auto min-h-[70vh] sm:min-h-[80vh] md:min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ el: ".custom-pagination", clickable: true }}
            loop={true}
            modules={[Pagination, Navigation]}
            onSwiper={setSwiperInstance}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="h-[50vh] sm:h-[60vh] md:h-[50vh]"
          >
            {/* slide 1 */}
            <SwiperSlide className="h-full flex items-center justify-center">
              <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-0 w-full max-w-7xl mx-auto px-3 py-4">
                {/* right */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-3/5 w-full text-center md:text-left md:space-y-10 space-y-4 flex flex-col md:items-center items-end justify-center md:block"
                >
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="md:text-6xl text-[27px] sm:text-3xl font-semibold leading-tight text-neutral-d-gray ">
                      Lessons and insights <br />
                      <span className="text-brand-primary">from 8 years</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg">
                      Where to grow your business as a photographer: site or
                      social media?
                    </p>
                  </div>
                  <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-neutral-d-gray transition-all duration-300 sm:flex hidden items-center justify-center gap-1">
                    Register
                    <img src={arrowRight} className="size-6 text-white" />
                  </button>
                </motion.div>
                {/* left */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-1/3 w-1/2 flex justify-center items-center"
                >
                  <img src={heroImg} alt="" className="w-full" />
                </motion.div>
              </div>
            </SwiperSlide>
            {/* slide 2 */}
            <SwiperSlide className="min-h-screen flex items-center justify-center">
              <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-0 w-full max-w-7xl mx-auto px-3 py-4">
                {/* right */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-3/5 w-full text-center md:text-left md:space-y-10 space-y-4 flex flex-col md:items-center items-end justify-center md:block"
                >
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="md:text-6xl text-[27px] sm:text-3xl font-semibold leading-tight text-neutral-d-gray ">
                      Designing success <br />
                      <span className="text-brand-primary">
                        with digital tools
                      </span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg">
                      Where should your brand live — on your own site or a
                      marketplace?
                    </p>
                  </div>
                  <button className="bg-green-500 text-white px-5 py-3 rounded hover:bg-neutral-d-gray transition-all duration-300 sm:flex hidden items-center justify-center gap-1">
                    Register
                    <img src={arrowRight} className="size-6 text-white" />
                  </button>
                </motion.div>
                {/* left */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-2/5 w-1/2 flex justify-center items-center"
                >
                  <img src={heroImg1} alt="" className="w-full" />
                </motion.div>
              </div>
            </SwiperSlide>
            {/* slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-0 w-full max-w-7xl mx-auto px-3 py-4">
                {/* right */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-3/5 w-full text-center md:text-left md:space-y-10 space-y-4 flex flex-col md:items-center items-end justify-center md:block"
                >
                  <div className="md:space-y-8 space-y-4">
                    <h1 className="md:text-6xl text-[27px] sm:text-3xl font-semibold leading-tight text-neutral-d-gray ">
                      Turn ideas into impact <br />
                      <span className="text-brand-primary">
                        with creative strategy
                      </span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg">
                      What drives better results — aesthetics or functionality?
                    </p>
                  </div>
                  <button className="bg-green-500 text-white px-5 py-3 rounded hover:bg-neutral-d-gray transition-all duration-300 sm:flex hidden items-center justify-center gap-1">
                    Register
                    <img src={arrowRight} className="size-6 text-white" />
                  </button>
                </motion.div>
                {/* left */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  }
                  transition={{ duration: 0.5 }}
                  className="md:w-2/5 w-1/2 flex justify-center items-center"
                >
                  <img src={heroImg2} alt="" className="w-full" />
                </motion.div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute z-40 bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6">
            <button ref={prevRef} aria-label="Previous slide" className="">
              <HiArrowNarrowLeft
                size={24}
                className="text-brand-primary/50 hover:text-brand-primary transition-colors duration-300"
              />
            </button>
            <div className="custom-pagination flex gap-2" />
            <button ref={nextRef} aria-label="Next slide" className="">
              <HiArrowNarrowRight
                size={24}
                className="text-brand-primary/50 hover:text-brand-primary transition-colors duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

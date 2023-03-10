import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function AboutPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <>
      <motion.section
        className="relative z-0 grid content-center w-auto h-auto min-w-full min-h-screen px-4 mx-auto text-center lg:min-h-screen lg:pb-8 lg:py-16 lg:px-12"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            className="mr-auto text-left place-self-center lg:col-span-7"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-primary-100">
              About Me
            </h1>
            <motion.p
              className="max-w-2xl mb-6 font-light text-gray-500 lg:pr-4 lg:mb-8 md:text-lg lg:text-xl"
              variants={item}
            >
              I live in Turkey, I feel like i am 30 years old and probably am. I
              like coding and coffee, I have a cute kitten. I used to play
              piano, nowadays I just listen or goof around in DAWs. I enjoy a
              lot of genres, take a peek on my{" "}
              <a
                className="text-green-400 cursor-pointer"
                href="https://open.spotify.com/user/ilikecakecups"
              >
                spotify
              </a>
              .
            </motion.p>
          </motion.div>

          <motion.div
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
          >
            <img
              src="https://placehold.jp/3d4070/ffffff/600x600.png"
              alt="uwu"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default AboutPage;
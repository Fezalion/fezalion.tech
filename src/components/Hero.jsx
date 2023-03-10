import React, { useEffect, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animationVariants = {
  hiddenright: { transform: "translateX(25%)", opacity: 0 },
  hiddenleft: { transform: "translateX(-25%)", opacity: 0 },
  hiddenup: { transform: "translateY(-25%)", opacity: 0 },
  hiddendown: { transform: "translateY(25%)", opacity: 0 },
  hidden: { opacity: 0 },
  visible: { transform: "translateX(0%)", opacity: 1, transition: { duration: 0.5, ease: [0.5, 1, 0.89, 1] }},    
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren'
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <section className="z-0 relative h-auto min-w-full w-auto px-4 mx-auto text-center grid content-center min-h-screen">
        <motion.h1
          className="text-2xl font-extrabold tracking-tight leading-none text-primary-100 md:text-4xl xl:text-6xl"
          ref={ref}
          initial="hiddenleft"
          animate={controls}
          variants={animationVariants}
        >
          Hello, I'm{" "}
          <motion.span
            className="text-secondary-500"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span variants={item}>F</motion.span>
            <motion.span variants={item}>e</motion.span>
            <motion.span variants={item}>z</motion.span>
            <motion.span variants={item}>a</motion.span>
            <motion.span variants={item}>l</motion.span>
            <motion.span variants={item}>i</motion.span>
            <motion.span variants={item}>o</motion.span>
            <motion.span variants={item}>n</motion.span>
          </motion.span>
        </motion.h1>
        <motion.p
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48"
          ref={ref}
          initial="hiddenright"
          animate={controls}
          variants={animationVariants}
        >
          I make coffee into code.
        </motion.p>        
      </section>
    </>
  );
}

export default Hero;

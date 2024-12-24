import "./AboutMe.scss";
import { motion } from "framer-motion";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 90,
  },
  animate: {
    x: 290,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
    },
  },
};

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="Wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariant}>Crystal Liu</motion.h1>
          <motion.h2 variants={textVariant}>Full-Stack </motion.h2>
          <motion.h2 variants={textVariant}>Web Developer</motion.h2>
        </motion.div>
        <div className="gpt">


          <DotLottieReact
            src="https://lottie.host/6c322773-f515-45a3-a241-d4ff02ebc5da/lpND5H1cn3.lottie"
            loop
            autoplay
            style={{ width: "55px", height: "50px" }}
          />
          <a
            href="https://chatgpt.com/g/g-67689a5d69e88191be0d7ab0ff1eb6bc-resume-copilot"
            className="floating-button"
            target="_blank"
            rel="noopener noreferrer"
          >Check out the new project: An AI-Driven Resume Copilot </a>
        </div>

      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Problem-solver
      </motion.div>
    </div>
  );
};
export default AboutMe;

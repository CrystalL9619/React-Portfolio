import "./AboutMe.scss";
import { motion } from "framer-motion";

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
    x: 0,
  },
  animate: {
    x: -200,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 4,
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
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Problem-Solver
      </motion.div>
    </div>
  );
};
export default AboutMe;

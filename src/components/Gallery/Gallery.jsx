import { useRef } from "react";
import "./Gallery.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Gallery = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="Gallery"
      variants={variants}
      initial="initial"
      //animate="animate"
      //whileInView={animate}
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/I Have An Idea!.gif" alt="An icon of Idea" />
          <h2>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h2>
        </div>
        <div className="title">
          <h2>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h2>
          <button>
            <a href="https://docs.google.com/document/d/1ZBwtwkjLzzf6vA3yUBNPL6vHpHOcMXkEs1H0MB9mKCs/edit">
              Why Me
            </a>
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Immersive Design</h2>
          <p>
            Create visually stunning and engaging web experiences that captivate
            users from the moment they land on your site.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Engaging Interaction</h2>
          <p>
            Surprise and delight with interactive elements. Smooth operation
            makes the user experience enjoyable and memorable.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgrey", color: "black" }}
        >
          <h2>Solid Function</h2>
          <p>
            Ensure your web product operates flawlessly behind the scenes. Build
            a robust backend architecture that can handle complex data
            processing.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Gallery;

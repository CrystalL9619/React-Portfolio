import "./Parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="Parallax"
      ref={ref}
      style={{
        background: "#fff",
      }}
    >
      <motion.div className="bookshelf"></motion.div>
      <motion.div style={{ y: yBg }} className="dialog"></motion.div>
    </div>
  );
};
export default Parallax;

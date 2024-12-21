import "./Banner.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Banner = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="Banner"
      ref={ref}
      style={{
        background: "#fff",
      }}
    >
      <div className="formular"></div>
      {/* <motion.div style={{ x: yBg }} className="formular"></motion.div> */}
    </div>
  );
};
export default Banner;

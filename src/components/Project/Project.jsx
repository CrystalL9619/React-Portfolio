import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import "./Project.scss";

const Project = () => {
  const ref = useRef();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data
    fetch("https://api-node-4-d27t.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => {
        // Map fetched data to match the required structure
        const mappedProjects = data.map((project) => ({
          id: project._id,
          title: project.name,
          language: project.Language,
          desc: project.desc,
          image: project.image,
        }));
        setProjects(mappedProjects);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="Project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projects.map((project) => (
        <Single item={project} key={project.id} />
      ))}
    </div>
  );
};

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="project image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See more</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;

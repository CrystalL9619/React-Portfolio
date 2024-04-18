import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Fetch links data
    fetch("https://api-node-4-d27t.onrender.com/api/links")
      .then((response) => response.json())
      .then((data) => {
        setLinks(data);
      })
      .catch((error) => console.error("Error fetching links:", error));
  }, []);

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          {links.map((link) => (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/${link.linkName.toLowerCase()}.png`}
                alt={`${link.linkName} icon`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

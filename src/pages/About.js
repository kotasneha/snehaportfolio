import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: "800px",
        background: "rgba(255,255,255,0.85)",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <h2>About Me</h2>
      <p>
        I'm a dedicated Web Developer and Software Engineer with hands-on experience in MERN stack
        development and AI-driven solutions. I enjoy transforming ideas into interactive, functional,
        and visually appealing applications.
      </p>
      <p>
        My journey includes building scalable applications, designing REST APIs, implementing secure
        authentication, and working with AI models for data-driven projects.
      </p>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SB Flights – Flight Booking App",
    desc: "Full-stack booking platform with MERN stack, JWT authentication, and REST APIs.",
    link: "https://github.com/kotasneha/SB-FLIGHT"
  },
  {
    title: "Digital Farmer Education & Engagement Platform",
    desc: "Responsive web app with community features, built using HTML, CSS, JS, and Tailwind.",
    link: "https://github.com/kotasneha/digital-farmer"
  }
];

export default function Projects() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
      {projects.map((project, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          style={{
            background: "rgba(255,255,255,0.9)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
          }}
        >
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "8px 15px",
              background: "#1a3d7c",
              color: "#fff",
              borderRadius: "5px"
            }}
          >
            View Project
          </a>
        </motion.div>
      ))}
    </div>
  );
}

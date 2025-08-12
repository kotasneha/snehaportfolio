import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML, CSS, JavaScript", desc: "Building responsive, accessible web interfaces" },
  { name: "React.js", desc: "Component-based UI development with state management" },
  { name: "Node.js & Express.js", desc: "Backend APIs and server-side logic" },
  { name: "MongoDB", desc: "Database design, queries, and Mongoose ODM" },
  { name: "Python & AI Tools", desc: "Data analysis, visualization, and AI model building" }
];

export default function Skills() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1 }}
          style={{
            background: "rgba(255,255,255,0.9)",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
          }}
        >
          <h3>{skill.name}</h3>
          <p style={{ fontSize: "0.9em", color: "#333" }}>{skill.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

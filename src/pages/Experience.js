import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "MERN Stack Intern – SmartInternz",
    period: "May 2025 – June 2025",
    details: [
      "Developed SB Flights – Flight Booking App using MERN stack.",
      "Implemented JWT authentication and role-based access control.",
      "Designed REST APIs for registration, booking, and cancellation.",
      "Built responsive React.js frontend with secure routing."
    ]
  },
  {
    title: "Artificial Intelligence Intern – SmartBridge",
    period: "May 2024 – July 2024",
    details: [
      "Preprocessed datasets and performed data visualization.",
      "Built AI-based analytics tools using Pandas, NumPy, Seaborn, Matplotlib.",
      "Created dashboards and small-scale AI-based solutions."
    ]
  }
];

export default function Experience() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", color: "#fff" }}>
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          style={{
            background: "rgba(0,0,0,0.6)",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >
          <h3>{exp.title}</h3>
          <p><em>{exp.period}</em></p>
          <ul>
            {exp.details.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

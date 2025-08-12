import React from "react";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from 'react-typed';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
      }}
    >
      {/* Animated Gradient Border */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "5px",
          borderRadius: "50%",
          background: "linear-gradient(270deg, #FFD700, #FF6347, #1E90FF)",
          backgroundSize: "600% 600%",
          display: "inline-block",
          animation: "gradientMove 6s ease infinite"
        }}
      >
        <img
          src="/profile.jpeg"
          alt="Sneha"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid white",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.4)"
          }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ fontSize: "2.5rem", margin: 0 }}
      >
        Hi, I'm <span style={{ color: "#FFD700" }}>Sneha</span>
      </motion.h1>

      {/* Professional Headline with Typing Animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ fontWeight: "normal" }}
      >
        <Typed
          strings={[
            "Web Developer",
            "MERN Stack Enthusiast",
            "Software Engineer"
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </motion.h3>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          maxWidth: "600px",
          fontSize: "1.1rem",
          lineHeight: "1.6",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "15px",
          borderRadius: "8px"
        }}
      >
        Passionate about creating user-friendly, scalable, and visually appealing applications.
        I combine creativity with technical expertise to deliver impactful digital experiences.
      </motion.p>
    </motion.div>
  );
}

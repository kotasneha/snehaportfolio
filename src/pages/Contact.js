import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: "500px",
        background: "rgba(255,255,255,0.9)",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <input type="email" placeholder="Your Email" style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />
        <textarea placeholder="Your Message" rows="4" style={{ width: "100%", padding: "10px", marginBottom: "10px" }}></textarea>
        <button style={{ padding: "10px 20px", background: "#1a3d7c", color: "#fff", border: "none" }}>Send</button>
      </form>
    </motion.div>
  );
}

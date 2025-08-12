import React from "react";
import { motion } from "framer-motion";

export default function PageWrapper({ children, bg, variant }) {
  const variants = {
    fadeIn: { opacity: 0 },
    slideLeft: { x: "100%", opacity: 0 },
    slideRight: { x: "-100%", opacity: 0 },
    slideUp: { y: "100%", opacity: 0 },
    zoomIn: { scale: 0.8, opacity: 0 }
  };

  return (
    <motion.div
      style={{
        flex: 1,
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "calc(100vh - 120px)" // leaves space for header/footer
      }}
      initial={variants[variant]}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      exit={variants[variant]}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

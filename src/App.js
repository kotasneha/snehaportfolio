import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper bg="/backgrounds/home-bg.jpg" variant="fadeIn"><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper bg="/backgrounds/about-bg.jpg" variant="slideLeft"><About /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper bg="/backgrounds/skills-bg.jpg" variant="slideRight"><Skills /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper bg="/backgrounds/projects-bg.jpg" variant="zoomIn"><Projects /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper bg="/backgrounds/experience-bg.jpg" variant="slideUp"><Experience /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper bg="/backgrounds/contact-bg.jpg" variant="fadeIn"><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
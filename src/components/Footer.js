import React from "react";

export default function Footer() {
  return (
    <footer className="footer" style={{
      backgroundColor: "#1a3d7c",
      padding: "15px",
      color: "#fff",
      textAlign: "center"
    }}>
      <p>© {new Date().getFullYear()} Sneha. All Rights Reserved.</p>
      <p>
        <a href="https://github.com/kotasneha" target="_blank" rel="noreferrer">GitHub</a> |{" "}
        <a href="https://www.linkedin.com/in/kotasneha29" target="_blank" rel="noreferrer">LinkedIn</a> |{" "}
        <a href="mailto:Kota.sneha29@gmail.com">Email</a>
      </p>
    </footer>
  );
}

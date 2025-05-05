import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "30px",
        padding: "12px 16px",
        fontSize: "18px",
        backgroundColor: "#00cccc",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        display: visible ? "inline" : "none",
        zIndex: 999,
      }}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;

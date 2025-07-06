import React, { useEffect } from "react";
import "../bubbletrail/bubbletrail.css";
const BubbleTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 200);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default BubbleTrail;

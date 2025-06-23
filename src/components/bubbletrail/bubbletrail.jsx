import React, { useEffect } from 'react';
import "../bubbletrail/bubbletrail.css"
const BubbleTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;
      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, 1000); // remove after 1 second
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default BubbleTrail;
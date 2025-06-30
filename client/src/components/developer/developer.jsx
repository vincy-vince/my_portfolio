import React, { useEffect, useRef } from "react";
import "../developer/developer.css";
const Developer = () => {
  // const boxRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const y = window.scrollY;
  //     const moveX = Math.min(y * 0.6, 400); // right movement (max 400px)
  //     const moveY = Math.min(y * 0.3, 200); // down movement (max 200px)

  //     if (boxRef.current) {
  //       boxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <div>
      <div
        // ref={boxRef}
        className="vincy_prof"
        style={{ textAlign: "center" }}
      >
        <img className="my_img" src="vincy2.jpeg" alt="vincy-vince_developer" />
        <h2>Vincy Vince</h2>
        <h3>Front End Developer</h3>
        <p className="italic">I build accesible and responsive websites</p>
      </div>
    </div>
  );
};

export default Developer;
// include email also and resume

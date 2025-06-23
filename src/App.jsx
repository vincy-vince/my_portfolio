import "./App.css";
import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Developer from "./components/developer/developer";
import Contact from "./components/contact/contact";
import Skillset from "./components/skills/skillset";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import BubbleTrail from "./components/bubbletrail/bubbletrail";
function App() {
  return (
    <>
      <BubbleTrail />
      <Header />
      <div className="Dev_prof">
        <Developer />
      </div>
      <About />
      <Education />
      <Experience />
      <Skillset />
      <Contact />
    </>
  );
}
export default App;

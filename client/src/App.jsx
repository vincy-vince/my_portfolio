import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Developer from "./components/developer/developer";
import Skillset from "./components/skills/skillset";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import BubbleTrail from "./components/bubbletrail/bubbletrail";
function App() {
  return (
    <>
      <BubbleTrail />
      <Header />
      <Hero />
      <div className="Dev_prof">
        <Developer />
      </div>
      <About />
      <Education />
      <Experience />
      <Skillset />
    </>
  );
}
export default App;

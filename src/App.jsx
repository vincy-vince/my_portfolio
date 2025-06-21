import "./App.css";
import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Developer from "./components/developer/developer";
import { useRef } from "react";
function App() {
  const aboutRef = useRef(null);

  const handleAboutScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header />
      <Developer />
      <About ref={aboutRef}/>
     
    </>
  );
}

export default App;

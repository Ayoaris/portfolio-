import React from "react";
import "./App.css";
import About from "./About/Index";
import Info from "./Infomation/Index";
import Navbar from "./Navbar";
import InTouch from "./Getintouch";

function App() {
  return (
    <>
      <Navbar />
      <Info />
      <About />
      <InTouch />
    </>
  );
}

export default App;

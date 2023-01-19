import React from "react";
import "./App.css";
import About from "./About/Index";
import Info from "./Infomation/Index";
import Navbar from "./Navbar";
import InTouch from "./Getintouch";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Info />
      <About />
      <InTouch />
      <Sidebar/>
    </>
  );
}

export default App;

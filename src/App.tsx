import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./assets/logo.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
  let navItems = ["Menu Here"];
  return (
    <>
      <Navbar brandName="" imageSrcPath={logo} navItems={navItems} />
      <span>
        <Landing />
      </span>
    </>
  );
}

export default App;

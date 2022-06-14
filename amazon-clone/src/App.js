import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
  <div className="App">
    hiii
    <Header />
    <Routes>
      <Route path="/" element ={<Home />} />
    </Routes>
    </div>
    );
}

export default App;

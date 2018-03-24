import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MainContainer from "./components/MainContainer";
import MemoryCard from "./components/MemoryCard";

const App = () => (
  <div className="container-fluid">
    <div className="container">
    <Navbar />
    <Jumbotron />
    <MainContainer> 
      <MemoryCard /> 
    </ MainContainer> 
    </div>
  </div>
);

export default App;

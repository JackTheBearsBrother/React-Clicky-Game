import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MainContainer from "./components/MainContainer";
import "./App.css";
// import images from "./images.json";


const App = () => (
  <div className="container-fluid mainContainer">
    <Navbar />
    <Jumbotron />
    <MainContainer /> 
  </div>
);

export default App;

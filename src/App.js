import FrontPage from "./images/FrontPage.jpg";
import BCSPicture from "./images/BooCampSpot.jpg";
import GLPicture from "./images/geoLertLogo.png";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      <ul className="NavBar">
          <li><a href="#startingPage">Home</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
        
        <div id="startingPage">
          <img id="openingPicture" src={FrontPage} alt="Front Page"></img>
          <a id="gitHubButton" alt="GitHub_Button" href="https://github.com/vedantm8">GitHub</a>
        </div>
        
        <div id="Portfolio">
          <h1 className="Title">Portfolio</h1>
          <div className="Boxes" id="Boo-Camp-Spot">
            <img className="PortfolioPicture" src={BCSPicture} alt="BootCampSpotPicture"></img>
            <h4 className="PortfolioText">Visit haunted places around the world.</h4>
            <br></br>
            <br></br>
            <br></br>
            <a className="PortfolioGitHub" alt="GitHub_Button" href="https://github.com/BooCampSpot/Boo-Camp-Spot">GitHub</a>
            <br></br>
            <a className="PortfolioLive" alt="GitHub_Button" href="https://boocamp-spot.herokuapp.com/">Live</a>
          </div>
          <div className="Boxes">
            <img className="PortfolioPicture" src={GLPicture} alt="GeoLertPicture"></img>
            <h4 className="PortfolioText">Location based messager</h4>
            <br></br>
            <br></br>
            <br></br>
            <a className="PortfolioGitHub" alt="GitHub_Button" href="https://github.com/Undropout/geolerttest">GitHub</a>
            <br></br>
            <a className="PortfolioLive" alt="GitHub_Button" href="https://undropout.github.io/geolerttest/slackisdownMVP/">Live</a>
          </div>
          <div className="Boxes">
            <img className="PortfolioPicture" src={GLPicture} alt="GeoLertPicture"></img>
            <h4 className="PortfolioText">A website utilizing BootStrap.</h4>
            <br></br>
            <br></br>
            <br></br>
            <a className="PortfolioGitHub" alt="GitHub_Button" href="">GitHub</a>
            <br></br>
            <a className="PortfolioLive" alt="GitHub_Button" href="">Live</a>
            <br></br>
          </div>
      </div>
      <br></br>
      <br></br>
      <div className="Skills">
      <h1 className="Title" id="skillTitle">Skills</h1>
    </div>
      </div>
    );
  }
}

export default App;

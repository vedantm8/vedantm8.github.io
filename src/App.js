import FrontPage from "./images/FrontPage.jpg";
import BCSPicture from "./images/BooCampSpot.jpg";
import GLPicture from "./images/geoLertLogo.png";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <ul>
            <li><a href="#startingPage">Home</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="contact.asp">Contact</a></li>
            <li><a href="about.asp">About</a></li>
          </ul>
          <div id="startingPage">
            <img id="openingPicture" src={FrontPage} alt="Front Page"></img>
            <a id="gitHubButton" alt="GitHub_Button" href="https://github.com/vedantm8">GitHub</a>
          </div>
          <div id="Portfolio">
            <h1 className="Title">Portfolio</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="Boo-Camp-Spot">
              <img id="BCSPicture" src={BCSPicture} alt="BootCampSpotPicture"></img>
              <h4 className="Text" id="BCSText">Visit haunted places around the world.</h4>
              <br></br>
              <br></br>
              <br></br>
              <a id="BCSGitHub" alt="GitHub_Button" href="https://github.com/BooCampSpot/Boo-Camp-Spot">GitHub</a>
              <br></br>
              <a id="BCSLive" alt="GitHub_Button" href="https://boocamp-spot.herokuapp.com/">Live</a>
            </div>
            <div id="GeoLert">
              <img id="GeoLerticture" src={GLPicture} alt="GeoLertPicture"></img>
              <h4 className="Text" id="BCSText">Visit haunted places around the world.</h4>
              <br></br>
              <br></br>
              <br></br>
              <a id="BCSGitHub" alt="GitHub_Button" href="https://github.com/Undropout/geolerttest">GitHub</a>
              <br></br>
              <a id="BCSLive" alt="GitHub_Button" href="https://undropout.github.io/geolerttest/slackisdownMVP/">Live</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

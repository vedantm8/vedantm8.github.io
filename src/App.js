import FrontPage from "./images/FrontPage.jpg";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
        <div className="startingPage">
          <img id = "openingPicture" src={FrontPage} alt="Front Page"></img>
          <a id = "gitHubButton" alt="GitHub_Button" href="https://github.com/vedantm8">GitHub</a>
        </div>
        </div>
        );
      }
    }
    
    export default App;

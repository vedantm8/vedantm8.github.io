import React, { Component } from 'react';
import BooCampSpotPhoto from "../../images/BooCampSpot.jpg";
import GeoLertPhoto from "../../images/geoLertLogo.png";
import "./Portfolio.css";

export default class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={BooCampSpotPhoto} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Boo-Camp-Spot</h5>
                                <p className="card-text">Visit haunted places around the world</p>
                                <a href="https://github.com/BooCampSpot/Boo-Camp-Spot">GitHub</a>
                                <br></br>
                                <a href="https://boocamp-spot.herokuapp.com/">Live</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" id="geoLertCard">
                            <img src={GeoLertPhoto} className="card-img-top" id="GeoLertPhoto" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">GeoLert</h5>
                                <p className="card-text">Location based messager</p>
                                <a href="https://github.com/Undropout/geolerttest">GitHub</a>
                                <br></br>
                                <a href="https://undropout.github.io/geolerttest/slackisdownMVP/">Live</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" id="something">
                            <img src={BooCampSpotPhoto} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Boo-Camp-Spot</h5>
                                <p className="card-text">Visit haunted places around the world</p>
                                <a href="https://www.google.com">GitHub</a>
                                <br></br>
                                <a href="https://www.bing.com">Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
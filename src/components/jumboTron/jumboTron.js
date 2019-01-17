import React, { Component } from 'react';
import "./jumboTron.css";

export default class jumboTron extends Component {
    render() {
        return (
            <div className="row">
                <br></br>
                <br></br>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div class="jumbotron">
                        <h1 class="display-4">Vedant Mukherjee</h1>
                        <hr class="my-4"></hr>
                        <p></p>
                        <a id="linkediLink" class="btn btn-primary btn-lg" href="https://www.linkedin.com/in/vedant-mukherjee/" role="button">Linkedin</a>
                        <hr className="linkso"></hr>
                        <a id="linkediLink" class="btn btn-primary btn-lg" href="https://github.com/vedantm8" role="button">GitHub</a>

                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        );
    }
}

/*

                        <br></br>
                        <a id="linkediLink" class="btn btn-primary btn-lg" href="https://www.linkedin.com/in/vedant-mukherjee/" role="button">Linkedin</a>
*/
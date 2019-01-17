import React, { Component } from 'react';
import "./navBar.css";

export default class NavBar extends Component {
    render() {
        return (
            <nav class="nav">
                <a class="navbar-brand" href="www.google.com">
                    <img src="/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
                </a>
                <li class="nav-item">
                    <a class="nav-link active" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Links">Links</a>
                </li>
            </nav>
        )
    }
}
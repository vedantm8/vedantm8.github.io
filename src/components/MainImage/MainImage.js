import React from 'react';
import { Image } from 'react-bootstrap'
import './MainImage.css'
import image from "../../assets/vedant_m.jpg"

class MainImage extends React.Component {
    render(){
        return(
            <div>
                <Image className="main-image" src={image} thumbnail />
            </div>
        );
    };
};

export default MainImage;  
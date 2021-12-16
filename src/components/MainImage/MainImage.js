import React from 'react';
import { Image } from 'react-bootstrap'
import './MainImage.css'

class MainImage extends React.Component {
    render(){
        return(
            <div>
                <Image className="main-image" src={this.props.src} thumbnail />
            </div>
        );
    };
};

export default MainImage;  
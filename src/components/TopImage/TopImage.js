import React from 'react';
import {Image} from "react-bootstrap";
import "./TopImage.css";

export default class TopImage extends React.Component {
    render() {
        return (
            <div>
                <Image src={this.props.src} className="imageElems"></Image>
            </div>
        )
    }
}
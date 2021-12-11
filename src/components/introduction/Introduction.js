import { render } from '@testing-library/react';
import React from 'react';
import './introduction.css';
export default class Introduction extends React.Component {
    render() {
        return (
            <div className="primary">
                <h1>Hello, my name is Vedant Mukherjee</h1>
            </div>
        );
    }
}
import React, { Component } from 'react';
import "./skills.css"

export default class Skills extends Component {
    render() {
        return (
            <div className="row">

                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <ul class="list-group">
                        <li class="list-group-item disabled" aria-disabled>Skills</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        )
    }
}
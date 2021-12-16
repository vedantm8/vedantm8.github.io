import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './AboutMeSummary.css';

const AboutMeSummary = () => {
    return (
        <Container fluid>
            <Row className="words"> 
                <Col>
                    <h1>I love to create and to innovate.</h1>
                </Col>
                <hr/>
                <Col>
                    <h2>I am a Computer Science student at the Fordham University and am based in North Jersey.</h2>
                </Col>
                <hr/>
                <Col>
                    <h3>I am a perpetually curious, and I am more than willing to learn new things and meet new challenges head first.</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMeSummary;
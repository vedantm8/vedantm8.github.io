import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NavBar from "../../components/navbar";
import MainImage from "../../components/MainImage/MainImage";
import AboutMeSummary from "../../components/AboutMeSummary/AboutMeSummary";
import vedantm from "../../assets/vedantm.JPG";

const AboutMe = () => {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={2} />
                    <Col xs={6} md={4}><MainImage src={vedantm} /></Col>
                    <Col><AboutMeSummary/></Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
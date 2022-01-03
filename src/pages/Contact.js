import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import NavBar from "../components/navbar";
import TopImage from "../components/TopImage/TopImage";
import CardComponent from "../components/CardComponent/CardComponent";
import Handshake from "../assets/handshake.jpg";
import LinkedIn from "../assets/linkedin_icon.png";
import Gmail from "../assets/gmail_icon.ico";

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col>
                        <TopImage src={Handshake}/>
                    </Col>
                </Row>
                <Row>
                    <h1 style={
                        {
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginTop: '100px'
                        }}>
                        Get in Touch
                    </h1>
                </Row>
                <Row style={{ marginTop: '100px', justifyContent: 'center', alignItems: 'center' }}>
                    <Col md="auto">
                        <CardComponent title="LinkedIn" button="Contact Me" imageURL={LinkedIn} href="https://www.linkedin.com/in/vedant-mukherjee"/>
                    </Col>
                    <Col xs = {1}></Col>
                    <Col md="auto">
                        <CardComponent title="Email Me" tetxt="I'll respond as fast as I can" button="Send an email" imageURL={Gmail} href="mailto:1f62b93d-0cbf-424d-b0ba-0059a6ae35df@vedantm.anonaddy.com"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
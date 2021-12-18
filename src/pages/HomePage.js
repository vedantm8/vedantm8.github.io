import { Container, Row, Col, Button } from 'react-bootstrap';


import NavBar from "../components/navbar";
import Introduction from "../components/introduction/Introduction";
import MainImage from "../components/MainImage/MainImage";
import vedant_m from "../assets/vedant_m.jpg";

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={6} md={4}><MainImage src={vedant_m}/></Col>
                    <Col>
                        <Introduction />
                        <Button href="/#/contacts">Contact Me</Button>{' '}
                    </Col>
                    <Col xs={3}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage;
import React from 'react';
import {Card, Button} from "react-bootstrap";

const CardComponent = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary" href={props.href}>{props.button}</Button>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;
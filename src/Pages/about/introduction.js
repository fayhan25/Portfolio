import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BackGround from "../BackGround";
import devpic from '../../images/devpic.jpg'
import Image from 'react-bootstrap/Image';
import './introduction.css'
const Introduction = () => {
    return (
        <Container>
            <Row>
                <Col>
                <Card className="bg-dark text-white">
                <Card.ImgOverlay>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Hi Everyone, I am Furkan Ayhan from Vancouver, BC, and I am a 4th year Computer Science Student in Simon Fraser
                    University, with a focus on developing web apps with MERN stack.
                    Other than coding I love to play soccer, watch movies, and travel.
                </Card.Text>
                </Card.ImgOverlay>
                
                </Card>
                </Col>
               
                <Col>
                    <Image src={devpic} rounded fluid className="Image" />
                </Col>
            </Row>
      </Container>
    )
}

export default Introduction
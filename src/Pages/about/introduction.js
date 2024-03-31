import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import BackGround from "../BackGround";
import devpic from '../../images/devpic.png'
import Image from 'react-bootstrap/Image';
import './introduction.css'
const Introduction = () => {
    return (
        <Container>
            <Row>
                <Col md = {7} style={{ paddingTop: 65, textAlign:"center", color:"white" }}>
                
                <h1 style={{fontSize: "250%"}}>About Me</h1>
                <p style={{fontSize: "150%", paddingTop: 55}}>
                    Hi Everyone, I am Furkan Ayhan from Vancouver, BC, and I am a 4th year Computer Science Student at Simon Fraser
                    University, with a focus on developing full stack web apps with MERN stack.
                    Other than coding I love to play soccer, watch movies, and travel.
                </p>
                

                </Col>
               
                <Col md={5} style={{ paddingTop: 45 }}>
                <img
                  src={devpic}
                  alt="devpic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
      </Container>
    )
}

export default Introduction
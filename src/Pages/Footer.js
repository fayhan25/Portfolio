import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <div className="all">  
            <Container className="footer">
                <Row>
                    <Col>
                        <h3>By Furkan Halim Ayhan</h3>
                    </Col>

                    <Col className="connect">
                        <Nav>
                        <Nav.Item>
                        <h3> Connect With Me:</h3>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href = "https://github.com/fayhan25" >
                            <AiFillGithub />
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href = "https://www.linkedin.com/in/fayhan25/" >
                            <FaLinkedinIn/>
                        </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
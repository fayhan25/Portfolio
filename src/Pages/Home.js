import React from "react";
import { Container,Row,Col } from 'react-bootstrap';
import Introduction from "./about/introduction";
import BackGround from "./BackGround";
import cube from '../images/cube.jpg'
import webdev from '../images/webdev.png'
const Home = () => {
    return (
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingTop: 100, color : "white"}}>
                  Hi There!{" "}
                  <span id="pot">
                    👋🏻
                  </span>
                </h1>
  
                <h1 className="heading-name" style={{color:"white"}}>
                  I'M
                  <b style = {{color:"purple"}}> FURKAN AYHAN</b>
                </h1>
  
                {/* <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div> */}
              </Col>
  
              <Col md={5} style={{ paddingTop: 100 }}>
                <img
                  src={webdev}
                  alt="cube"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
    )
}

export default Home
import React from "react";
import { Container,Row,Col } from 'react-bootstrap';
import Introduction from "./about/introduction";
import BackGround from "./BackGround";

import webdev from '../images/webdev.png'
import Type from "./Type";
const Home = () => {
    return (
      <BackGround>
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

                <div style={{paddingTop: 25,textAlign: "left",color:"purple", fontSize: "200%", fontWeight: "bold", fontStyle: "italic"}}>
                  <Type />
                </div>
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
      </BackGround>
    )
}

export default Home
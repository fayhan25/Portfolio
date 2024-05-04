import React from "react"
import {
    AiFillGithub,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container,Row,Col } from 'react-bootstrap';  
const HomeIntro = () =>{
    return(
        <Container fluid className="intro-container" style={{paddingTop: "5%"}}>
        <Container>
        <Row>
          <Col md={8}>
            <h1 style={{color:"white", textAlign :'center', paddingBottom: "5%"}} >
              AN INTRODUCTION
            </h1>
            <p style={{color:"white"}}>
              I fell in love with developing apps, especially creating dynamic web apps
              <br />
              <br />
              I am fluent in
              <i>
                <b style={{color:"purple"}}> Javascript</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{color:"purple"}}>Web Technologies and Products </b> and
                also in areas related to{" "}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{color:"purple"}}>Node.js</b> and
              <i>
                <b style={{color:"purple"}}>
                  {" "}
                  Modern Javascript Library and Frameworks like
                </b>
              </i>
              <i>
                <b style={{color:"purple"}}> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} style = {{textAlign: "center", marginTop: "5%"}}>
            <h1 style={{color:"white", textAlign:"center", paddingBottom:"3%"}}>FIND ME ON</h1>
                <a
                  href="https://github.com/fayhan25"
                  className="icon"
                >
                  <AiFillGithub color = {"purple"} size={"3em"}/>
                </a>
                <a
                  href="https://www.linkedin.com/in/fayhan25/"
                  className="icon"
                  style={{paddingLeft: "3%"}}
                >
                  <FaLinkedinIn color = {"purple"} size={"3em"}/>
                </a>
          </Col>
        </Row>
      </Container>
      </Container>
    )
}

export default HomeIntro;
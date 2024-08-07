import React from "react"
import {
    AiFillGithub,
  } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import myAvatar from '../images/avatar.jpg'
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
              I am passionate about developing apps, especially creating dynamic web apps
              <br />
              <br />
              I am fluent in
              <i>
                <b style={{color:"purple"}}> Javascript, C++, HTML</b>
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
            <Image src={myAvatar} className="img-fluid" alt="avatar" roundedCircle={true} />
          </Col>
        </Row>
        <Row>
        <h1 style={{color:"white", textAlign:"center", paddingBottom:"3%"}}>FIND ME ON</h1>
          <Col style = {{textAlign: "center"}}>
            
                <a
                  href="https://github.com/fayhan25"
                  className="icon"
                >
                  <AiFillGithub color = {"purple"} size={"3em"}/>
                </a>
            </Col>
            <Col  style = {{textAlign: "center"}}>
                <a
                  href="https://www.instagram.com/furkan_hlm/"
                  className="icon"
                >
                  <FaInstagram color = {"purple"} size={"3em"}/>
                </a> 
            </Col>
            <Col  style = {{textAlign: "center"}}>
                <a
                  href="https://www.linkedin.com/in/fayhan25/"
                  className="icon"
                  
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
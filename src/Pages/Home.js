import React,{useRef} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scroll from 'react-scroll'
import NavLinks from './NavLinks';
import { Container,Row,Col, Button } from 'react-bootstrap';
import HomeIntro from "./HomeIntro";
import BackGround from "./BackGround";
import webdev from '../images/webdev.png'
import Type from "./Type";
import Introduction from "./about/introduction";
import Projects from "./projects/Projects";

const Home = () => {
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const introRef = useRef(null)
  const executeScroll = () => aboutRef.current.scrollIntoView()    
  const projectScroll = () => projectRef.current.scrollIntoView()
  const introScroll = () => introRef.current.scrollIntoView()
  // run this function from an event handler or an effect to execute scroll 
    return (
      <React.Fragment>
        {/* <NavLinks/> */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Furkan's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-column align-items-end">
              <Nav>
                <Nav.Link onClick={introScroll}>Connect</Nav.Link>
                <Nav.Link onClick= {executeScroll}>
                    About
                </Nav.Link>
                <Nav.Link onClick={projectScroll}>      
                  Projects
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid className="home-section" id="home">
          <BackGround>
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
          </BackGround>
        </Container>

      <Container id = "containerElement">
        <Row>
          <div ref = {introRef}>
            <HomeIntro/>
          </div>
      
          <div ref = {aboutRef}>
            <Introduction />
          </div>
          <div ref = {projectRef}>
            <Projects/>
          </div>
          
        </Row>
      </Container>
      </React.Fragment>     
    )
}

export default Home
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack"
import devpic from '../../images/devpic.png'
import { GiSoccerBall } from "react-icons/gi";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import './introduction.css'
const Introduction = () => {
    return (
        <Container>
            <Row>
                <Col md = {7} style={{ paddingTop: 65, color:"white" }}>
                
                <h1 style={{fontSize: "250%"}}>About Me</h1>
                <p style={{fontSize: "150%", paddingTop: 55}}>
                    Hi Everyone, I am Furkan Ayhan from Vancouver, BC. 
                    <br/>
                    I am a 4th year Computer Science Student at Simon Fraser University 
                    <br/>
                    with a focus on developing full stack web apps with MERN stack.
                    Other than coding I love to:
                    <br/>
                    <br/>
                    <div style={{color:"purple"}}>
                        <GiSoccerBall color="white"/> Play soccer
                      <br/>
                        <BiCameraMovie color="white"/> Watch movies
                      <br/> 
                        <RiFlightTakeoffFill color="white"/> Travel.
                    </div>
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
            
            <Row style={{paddingTop: 45}}>
            <h1 style={{textAlign: "center", color: "white", paddingBottom: 35}}> Technical Skills </h1>
            <TechStack/>
            </Row>

            <Row style={{paddingTop: 45}}>
            <h1 style={{textAlign: "center", color: "white", paddingBottom: 35}}> Technical Tools </h1>
            <ToolStack/>
            </Row>
            
      </Container>
    )
}

export default Introduction
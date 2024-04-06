import React from "react";
import "./ToolStack.css"
import { Col, Row } from "react-bootstrap";
import {
    DiGit,
    DiNpm
  } from "react-icons/di";
import {
    SiPostman
  } from "react-icons/si"

import { BsBootstrap } from "react-icons/bs";
import { BiLogoVisualStudio,BiLogoDocker } from "react-icons/bi";

const ToolStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "purple"}}>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>BootStrap</h2>
            <div className="image-container">
              <BsBootstrap size={"50%"}/>
            </div>
              
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>GitHub</h2>
            <div className="image-container">
              <DiGit className ="image-container" size={"50%"}/>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Postman</h2>
            <div className="image-container">
            <SiPostman size={"50%"}/>
            </div>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>VS Code</h2>
    
            <div className="image-container">
            <BiLogoVisualStudio size={"50%"}/>
            </div>
              
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Docker</h2>
    
            <div className="image-container">
            <BiLogoDocker size={"50%"}/>
            </div>
              
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>npm</h2>
    
            <div className="image-container">
            <DiNpm className ="image-container" size={"50%"} />
            </div>
              
          </Col>
        </Row>        
    )
}

export default ToolStack;
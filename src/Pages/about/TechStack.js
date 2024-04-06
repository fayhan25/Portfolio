import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiRust,
  DiHaskell,
  DiCss3,
  DiHtml5
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";

const TechStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "purple"}}>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>C++</h2>
            <div className = "image-container">
            <CgCPlusPlus size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Javascript</h2>
            <div className = "image-container">
            <DiJavascript1 size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>NodeJs</h2>
            <div className = "image-container">
            <DiNodejs size={"50%"}/>
            </div>

          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>React</h2>
            <div className = "image-container">
            <DiReact size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>MongoDb</h2>
            <div className = "image-container">
            <DiMongodb size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>PostGresSQL</h2>
            <div className = "image-container">
            <SiPostgresql size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Python</h2>
            <div className = "image-container">
            <DiPython size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Java</h2>
            <div className = "image-container">
            <DiJava size={"50%"}/>
            </div>
            
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Rust</h2>  
            <div className = "image-container">
            <DiRust size={"50%"}/>
            </div>
              
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>Haskell</h2>
            <div className = "image-container">
            <DiHaskell size={"50%"}/>
            </div>
              
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>CSS</h2>
            <div className = "image-container">
            <DiCss3 size={"50%"}/>
            </div>
              
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>HTML</h2>
            <div className = "image-container">
            <DiHtml5 size={"50%"}/>
            </div>
              
          </Col>
        </Row>
        
        
        
      );
}

export default TechStack;
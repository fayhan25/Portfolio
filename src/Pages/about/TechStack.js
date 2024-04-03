import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiRust,
  DiHaskell,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const TechStack = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px", color: "purple"}}>
          <Col xs={4} md={2} className="tech-icons">
            <h2 style={{ color:"white"}}>C++</h2>
            <CgCPlusPlus size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>Javascript</h2>
            <DiJavascript1 size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>NodeJs</h2>
            <DiNodejs size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>React</h2>
            <DiReact size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>MongoDb</h2>
            <DiMongodb size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>PostGresSQL</h2>
            <SiPostgresql size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>Python</h2>
            <DiPython size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>Java</h2>
            <DiJava size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>Rust</h2>  
            <DiRust size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>Haskell</h2>
            <DiHaskell size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>CSS</h2>
            <DiCss3 size={"50%"}/>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
          <h2 style={{ color:"white"}}>HTML</h2>
            <DiHtml5 size={"50%"}/>
          </Col>
        </Row>
      );
}

export default TechStack;
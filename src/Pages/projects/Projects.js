import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import devpic from "../../images/devpic.png"
import ProjectCard from "./ProjectCard";
import "./Projects.css"
import Movie from '../../images/Movie.PNG'
import places from '../../images/places.PNG'
function Projects() {
  return (
    <Container fluid>
      <Container>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "5%"}}>
          My Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "5%" }}>
          <Col md={4} className = "card-cols" >
            <div className="project-container" style={{height: '100%'}}>
            <ProjectCard className = "card" 
              imgPath={Movie}
              title="Movies App"
              description="Crafted a user-friendly movies app using Node.js and React"
              ghLink="https://github.com/fayhan25/MoviesApp"
            />
             </div>
          </Col>
          
          <Col md={4} className = "card-cols">
            
            <ProjectCard className = "card" 
              imgPath={places}
              title="Places App"
              description="Developed a dynamic Places app with the MERN framework (MongoDB, ExpressJS, React, NodeJs) for users to share and review visited places."
              ghLink="https://github.com/fayhan25/placesapp"
            />
            

          </Col>

          <Col md={4} className = "card-cols">
            <div className="project-container">
            <ProjectCard className = "card"
              imgPath={devpic}
              title="HRT Fitness"
              description="Developed a dynamic fitness app with Java and Android Studio, offering personalized diet and workout recommendations."
              ghLink="https://github.com/fayhan25/HRTFitnessApp"          
            />
            </div>

          </Col>

          <Col md={4} className = "card-cols">
            <div className="project-container">
            <ProjectCard className = "card"
              imgPath={devpic}
              title="FlixList"
              description="Created a dynamic movie review platform with JavaScript/React, enabling users to share reviews with friends and followers."
              ghLink="https://github.com/fayhan25/FlixList"
            />
            </div>

          </Col>

          <Col md={4} className = "card-cols">
            <div className="project-container">
            <ProjectCard className = "card"
              imgPath={devpic}
              title="Portfolio"
              description="Portfolio built with reactjs to present information about myself"
              ghLink="https://github.com/fayhan25/Portfolio"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
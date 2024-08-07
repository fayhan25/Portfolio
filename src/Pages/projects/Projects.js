import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import devpic from "../../images/devpic.png"
import ProjectCard from "./ProjectCard";
import "./Projects.css"
import Movie from '../../images/Movie.PNG'
import places from '../../images/places.PNG'
import flixlist2 from '../../images/flixlist2.PNG'
import port from '../../images/portfolio.PNG'
import Soccer from '../../images/SoccerAI.png'
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
              title="Movie Log"
              description="Developed a dynamic app called Movie Log for everyone to share and log the movies they have watched. Used IMDB Api from rapid Api
              to get movie information. Created an API with REST Api methodology to get movie, and user information from the user"
              ghLink="https://github.com/fayhan25/MoviesApp"
            />
             </div>
          </Col>
          
          <Col md={4} className = "card-cols">
            
            <ProjectCard className = "card" 
              imgPath={places}
              title="Your Places"
              description="Developed a dynamic Places app with the MERN framework (MongoDB, ExpressJS, React, NodeJs) for users to share and review visited places.
              Implemented an API to get information from the frontend to the backend "
              ghLink="https://github.com/fayhan25/placesapp"
            />
            

          </Col>

          <Col md={4} className = "card-cols">
            <div className="project-container">
            <ProjectCard className = "card"
              imgPath={Soccer}
              title="Soccer AI"
              description = "Developed a website to give personalized tips using AI on how to improve soccer skills based on given user inputs using Next.js, OpenAI api, Vercel AI."
              ghLink="https://github.com/fayhan25/HRTFitnessApp"          
            />
            </div>

          </Col>

          <Col md={4} className = "card-cols">
            <div className="project-container">
            <ProjectCard className = "card"
              imgPath={flixlist2}
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
              title="HRT Fitness"
              description="Developed a dynamic fitness app with Java and Android Studio, offering personalized diet and workout recommendations."
              ghLink="https://github.com/fayhan25/HRTFitnessApp"          
            />
            </div>

          </Col>

          <Col md={4} className = "card-cols">
            <div className="project-container">
            <ProjectCard className = "card"
              imgPath={port}
              title="Portfolio"
              description="Portfolio built with Reactjs to present information about myself"
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
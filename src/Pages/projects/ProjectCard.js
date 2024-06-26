import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) =>{
    return (
        <Card style = {{backgroundColor: "#9370DB", height: '100%'}}>
        <Card.Img style = {{width: '100%', height: '60%'}} variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title style = {{color: "white"}}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", color: "white" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            Github
          </Button>
          {"\n"}
          {"\n"}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card> 
    )
}

export default ProjectCard
import React from "react"; 
import { CFooter, CLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn,FaInstagram } from "react-icons/fa";
import './Footer.css'
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        // <div className="all">  
        //     <Container className="footer">
        //         <Row>
        //             <Col>
        //                 <h3 style={{marginTop :"2%"}}>Developed By Furkan Halim Ayhan</h3>
        //             </Col>

        //             <Col className="connect">
        //                 <Nav>
        //                 <Nav.Item>
        //                 <h3 style={{marginTop: "11%"}}> Connect With Me:</h3>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                 <Nav.Link href = "https://github.com/fayhan25" >
        //                     <AiFillGithub />
        //                 </Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                 <Nav.Link href = "https://www.linkedin.com/in/fayhan25/" >
        //                     <FaLinkedinIn/>
        //                 </Nav.Link>
        //                 </Nav.Item>
        //                 </Nav>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>

            <div>
            <CFooter style={{paddingLeft: "10%", paddingRight:"10%"}}>
                <div>
                    <span style={{color:"black"}}>&copy; Developed By Furkan Ayhan 2024</span>
                </div>
                <div>
                    <span style={{color:"black"}}>Connect with me: </span>
                    <CLink href="https://github.com/fayhan25"><AiFillGithub color = {"purple"} size={"2em"}/></CLink>
                    &#
                    <CLink  href="https://www.instagram.com/furkan_hlm/"><FaInstagram color = {"purple"} size={"2em"}/></CLink>
                    &#
                    <CLink href="https://www.linkedin.com/in/fayhan25/"><FaLinkedinIn color = {"purple"} size={"2em"}/></CLink>
                </div>
            </CFooter>
             </div>   

    )
}

export default Footer
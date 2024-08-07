import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const NavLinks = () => {
  const anchor = document.getElementById('aboutPage')
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">Furkan's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="flex-column align-items-end">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link onClick={anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    About
                </Nav.Link>
                <Nav.Link>      
                  Projects
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavLinks
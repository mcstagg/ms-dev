import React from 'react';
import { Row, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Banner = (props) => {

  let showResumeModal = props.showResumeModal;
  
  return (

    <div className="bg-dark p-4">
      <Row>
        <Col>
          <h1 className="text-center text-light mb-3">Mike Stagg Dev</h1>
        </Col>
      </Row>  
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mike's Links</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link onClick={showResumeModal}>Resume</Nav.Link>
                <Nav.Link onClick={()=> window.open("https://github.com/mcstagg", "_blank")}>GitHub</Nav.Link>
                <Nav.Link onClick={()=> window.open("https://www.linkedin.com/in/michael-stagg-0574571b9/", "_blank")}>LinkedIn</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                {/* <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </div>
  )    
}

export default Banner;
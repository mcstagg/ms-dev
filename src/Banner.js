import React from 'react';
import { Row, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Banner = () => {
  
  return (

    <div className="bg-dark p-5">
      <Row>
        <Col>
          <h1 className="text-center text-light mb-5">Mike Stagg Dev</h1>
        </Col>
      </Row>  
      <Row>
        <Col>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mike's Links</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Resume</Nav.Link>
                <Nav.Link href="#pricing">GitHub</Nav.Link>
                <Nav.Link href="#deets">LinkedIn</Nav.Link>
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
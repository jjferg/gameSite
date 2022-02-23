import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../Hullagahn_logo5.svg";
import "../App.css";

const tl = gsap.timeline();

const NavigationBar = () => {
  const appLogoRef = useRef();

   useEffect(() => {
     gsap.to(appLogoRef.current, {
       ease: "none",
       yoyo: true,
       duration: 5,
       repeat: -1,
       rotationY: "360deg",
     });
   }, []);
 

  return (
    <Navbar
      collapseOnSelect
      className="d-flex flex-row-reverse"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
      
        />

       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <Logo ref={appLogoRef} style={{ height: "30px", display: "inline", position: "absolute" }} />
    </Navbar>
  );
};

//  <Nav
//    collapseOnSelect
//    expand="lg"
//    className="navParent"
//    defaultActiveKey="/home"
//  >
//    <Nav.Link className={window.innerWidth > 600 ? "links" : ""} href="/home" ref={link1}>
//      Active
//    </Nav.Link>
//    <Nav.Link className={window.innerWidth > 600 ? "links" : ""} eventKey="link-1" ref={link2}>
//      Link
//    </Nav.Link>
//    <Nav.Link className={window.innerWidth > 600 ? "links" : ""} eventKey="link-2" ref={link3}>
//      Link
//    </Nav.Link>
//    <Nav.Link className={window.innerWidth > 600 ? "links" : ""} eventKey="disabled" disabled ref={link4}>
//      Disabled
//    </Nav.Link>
//  </Nav>;
export default NavigationBar;

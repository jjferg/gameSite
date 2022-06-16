import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../Hullagahn_logo5.svg";
import "./nav.css";

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
    <>
      <Navbar
        collapseOnSelect
        className="d-flex navStyle flex-row-reverse"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ color: "rgb(88, 198, 1)" }}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "rgb(88, 198, 1)" }}
          />

          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ color: "rgb(88, 198, 1)" }}
          >
            <Nav className="me-auto" style={{ color: "rgb(88, 198, 1)" }}>
              <Nav.Link href="#features" style={{ color: "rgb(88, 198, 1)" }}>
                Gaming
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "rgb(88, 198, 1)" }}>
                Sports
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{ color: "rgb(88, 198, 1)" }}>
                In Game Clips
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                style={{ color: "rgb(88, 198, 1)" }}
              >
                Mostly Podcast
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Logo
          ref={appLogoRef}
          style={{
            height: "30px",
            top: "20%",
            display: "inline",
            position: "absolute",
          }}
        />
      </Navbar>
    
    </>
  );
};

export default NavigationBar;

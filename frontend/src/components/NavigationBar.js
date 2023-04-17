import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav, Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../Hullagahn_logo5.svg";
import "./nav.css";

gsap.registerPlugin(ScrollTrigger);

const NavigationBar = () => {

  //conditional for loading position of the navbar
  const navPath = window.location.pathname === "/";
  const navIndex = navPath ? 0 : 5;
  const appLogoRef = useRef();
  const naviBar = useRef();

  useEffect(() => {
    gsap.to(appLogoRef.current, {
      ease: "none",
      yoyo: true,
      duration: 5,
      repeat: -1,
      rotationY: "360deg",
    });
  }, []);

  useLayoutEffect(() => {
    gsap.set(naviBar.current,{visibility: "hidden"});
    gsap.to(naviBar.current,{autoAlpha: 1, delay: 3})
  },[]);

  return (
    <>
      <Navbar
        ref={naviBar}
        collapseOnSelect
        className="d-flex navStyle flex-row-reverse"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          color: "rgb(88, 198, 1)",
          top: 0,
          zIndex: navIndex,
        }}
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
            <Nav style={{ color: "rgb(88, 198, 1)" }}>
              <Link
                className="navLinks"
                to="/home"
                style={{ color: "rgb(88, 198, 1)", textDecoration: "none" }}
              >
                HOME
              </Link>

              <Link
                className="navLinks"
                to="/gaming"
                style={{
                  color: "rgb(88, 198, 1)",
                  textDecoration: "none",
                }}
              >
                {" "}
                GAMING
              </Link>

              <Link
                className="navLinks"
                to="/sports"
                style={{
                  color: "rgb(88, 198, 1)",
                  textDecoration: "none",
                }}
              >
                SPORTS
              </Link>
              <Link
                className="navLinks"
                to="/clips"
                style={{
                  color: "rgb(88, 198, 1)",
                  textDecoration: "none",
                }}
              >
                CLIPS
              </Link>
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

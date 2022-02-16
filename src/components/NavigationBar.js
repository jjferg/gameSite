import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";

const tl = gsap.timeline();

const NavigationBar = () => {
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();
  const link4 = useRef();

  useEffect(() => {
    tl.from(
      link4.current,
      {
        autoAlpha: 0,
        y: -400,
        duration: 1,
        yoyo: true,
        ease: "bounce.out(0.1, 1)",
      },
      "-=0.5"
    );
    tl.from(
      link3.current,
      {
        autoAlpha: 0,
        y: -300,
        duration: 1,
        yoyo: true,
        ease: "bounce.out(0.1, 1)",
      },
      "-=0.5"
    );
    tl.from(
      link2.current,
      {
        autoAlpha: 0,
        y: -200,
        duration: 1,
        yoyo: true,
        ease: "bounce.out(0.1, 1)",
      },
      "-=0.5"
    );
    tl.from(
      link1.current,
      {
        autoAlpha: 0,
        y: -100,
        duration: 1,
        yoyo: true,
        ease: "bounce.out(0.1, 1)",
      },
      "-=0.5"
    )
      .to(link1.current, {
        y: 8,
        x: -2,
        duration: 4,
        yoyo: true,
        ease: "none",
        repeat: -1,
      })
      .to(link2.current, {
        y: 9,
        x: 1,
        duration: 4,
        yoyo: true,
        ease: "none",
        repeat: -1,
      })
      .to(link3.current, {
        y: -9,
        x: -1,
        duration: 4,
        yoyo: true,
        ease: "none",
        repeat: -1,
      })
      .to(link4.current, {
        y: 1,
        x: 9,
        duration: 4,
        yoyo: true,
        ease: "none",
        repeat: -1,
      });
  });

  return (
    <Nav expand="lg" className="navParent" defaultActiveKey="/home">
      <Nav.Link className="links" href="/home" ref={link1}>
        Active
      </Nav.Link>
      <Nav.Link className="links" eventKey="link-1" ref={link2}>
        Link
      </Nav.Link>
      <Nav.Link className="links" eventKey="link-2" ref={link3}>
        Link
      </Nav.Link>
      <Nav.Link className="links" eventKey="disabled" disabled ref={link4}>
        Disabled
      </Nav.Link>
    </Nav>
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

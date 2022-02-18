import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import xboxController from "../components/images/xboxcontrol.png";
import ps5Controller from "../components/images/ps5controller.png";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// reference to elements to use for animation
const Home = () => {
  const appLogoRef = useRef(null);
  const xboxControlRef = useRef(null);
  const psControlRef = useRef(null);
  const section1Ref = useRef(null);
  const startElementRef = useRef(null);

  const tl = gsap.timeline();

  // animate spinning Logo
  useEffect(() => {
    gsap.to(appLogoRef.current, {
      ease: "none",
      yoyo: true,
      duration: 5,
      repeat: -1,
      rotationY: "360deg",
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <NavigationBar />
      <div className="mainDiv" >
        <Row>
          <Col sm={true} className="section1" >Yooo</Col>
          <Col sm={true} className="section2">
            its us in here!!
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

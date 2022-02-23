import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import axios from "axios";
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
  // useEffect(() => {
  //   gsap.to(appLogoRef.current, {
  //     ease: "none",
  //     yoyo: true,
  //     duration: 5,
  //     repeat: -1,
  //     rotationY: "360deg",
  //   });
  // }, []);

 

  const id = "7s8focd6za4eodq2al6ugvgrrqhjur";
  const auth = 'mkld15wi1ydjugfh9aais2uu20cpnv'
  const api = axios.create({
    headers: {
      Authorization: auth,
      Client_Id: id,
    },
  });

  useEffect(() => {
    const getData = async () => {
      const data = await api.get(
        "https://api.twitch.tv/helix/users?login=hullagahn/", {mode: 'cors'}
      );
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      {/* <NavigationBar /> */}
      <div className="mainDiv">
        <Row>
          <Col sm={12} className="section1">
            Yooo
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

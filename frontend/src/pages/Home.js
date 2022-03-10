import React, { useEffect, useRef, useState } from "react";
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

  const [twitchStats, setTwitchStats] = useState("");
  const [twitchNameToSearch, setTwitchNameToSearch] = useState("");

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
  
  useEffect(() => {
    if (twitchNameToSearch) {
      const twitchData = async () => {
        const res = await axios.get(`/hey/${twitchNameToSearch}`);
        console.log(res.data);
      };
      twitchData();
    }
  }, [twitchNameToSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(twitchNameToSearch);
    setTwitchNameToSearch("");
  };

  return (
    <>
      {/* <NavigationBar /> */}
      <div className="mainDiv">
        <Row>
          <Col sm={12} className="section1">
            {console.log(twitchStats)}
          </Col>
          <Col>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter twitch name"
                value={twitchNameToSearch || ""}
                onChange={(e) => setTwitchNameToSearch(e.target.value)}
              />
              <button type="submit">ENTER</button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

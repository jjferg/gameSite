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
  const [twitchNameToSearch, setTwitchNameToSearch] = useState(" ");
  const [submitName, setSubmitName] = useState(false);

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

  const twitchData = async (e) => {
    e.preventDefault();
    setTwitchStats("");
    console.log(section1Ref.current.value);
    if (section1Ref.current.value.length < 1) {
      console.log("please enter a name");
    }
    if (section1Ref.current.value.length > 0) {
      const res = await axios.get(`/hey/${section1Ref.current.value}`);
      setTwitchStats(res.data);
      section1Ref.current.value = "";
    }
    console.log(twitchStats);
  };

  return (
    <>
      {/* <NavigationBar /> */}
      <div className="mainDiv">
        <Row>
          <Col sm={12} className="section1">
            {twitchStats
              ? twitchStats.data.length < 1
                ? " user not online/user not found"
                : twitchStats.data[0].id
              : null}
          </Col>
          <Col>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Enter twitch name"
                ref={section1Ref}
              />
              <button onClick={twitchData} type="submit">
                ENTER
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;

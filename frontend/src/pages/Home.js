import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import axios from "axios";
import xboxController from "../components/images/xboxcontrol.png";
import ps5Controller from "../components/images/ps5controller.png";
import curtainLeft from "../components/images/curtatins-Left.png";
import curtainRight from "../components/images/curtatins-Right.png";
import hullaLogoControl from "../components/images/controller_2021.svg";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

// reference to elements to use for animation
const Home = () => {
  const appLogoRef = useRef(null);
  const xboxControlRef = useRef(null);
  const psControlRef = useRef(null);
  const section1Ref = useRef(null);
  const logoRef = useRef(null);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const startElementRef = useRef(null);

  const tl = gsap.timeline();

  const [twitchStats, setTwitchStats] = useState("");
  const [twitchNameToSearch, setTwitchNameToSearch] = useState(" ");
  const [errMessage, setErrMessage] = useState(" ");

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

  useLayoutEffect(() => {
    tl.to(rightCurtain.current, {
      scrollTrigger: {
        trigger: rightCurtain.current,
        start: "top top",
        end: "=+4000",
        pin: startElementRef.current,
        scrub: 1.5,
        markers: true,
        id: 'right',
      },
      x: 3000,
      ease: "none",
    })
      .to(leftCurtain.current, {
        scrollTrigger: {
          trigger: rightCurtain.current,
          start: "top top",
          end: "=+4000",
          scrub: 1.5,
          markers: true,
          id: 'left'
        },
        x: -3000,
        ease: "none",
      })
      .to(logoRef.current, {
        scrollTrigger: {
          trigger: startElementRef.current,
          start: "top top",
          end: "4000",
          scrub: 1.5,
          markers: true,
          pin: true,
          id: "logo",
        },
        scale: 50,
      });
  });

  const twitchData = async (e) => {
    e.preventDefault();
    setTwitchStats(" ");
    setErrMessage(" ");
    console.log(section1Ref.current.value);
    if (section1Ref.current.value.length < 1) {
      return setErrMessage("please enter name...");
    }
    if (section1Ref.current.value.length > 0) {
      const res = await axios.get(`/hey/${section1Ref.current.value}`);
      setTwitchStats(res.data);
      section1Ref.current.value = "";
    }
    console.log(twitchStats);
  };

  const messageDisplay = !twitchStats.data ? (
    " "
  ) : (
    <span style={{ color: "red" }}>{"USER DOESN'T EXIST"}</span>
  );

  return (
    <>
      {/* <NavigationBar /> */}
      <div style={{ height: "2000px", position: "relative" }}>
        <div ref={startElementRef}
          style={{
            padding: "0",
            margin: "0",
            overflow: "hidden",
            height: "1000px",
            width: "100%",
            
          }}
          className="mainDiv"
        >
          <img
            ref={leftCurtain}
            style={{
              height: "100vh",
              width: "50%",
              padding: "0",
              margin: "0",
            }}
            src={curtainLeft}
            alt="left half curtain"
          />

          <img
            ref={rightCurtain}
            style={{
              height: "100vh",
              width: "50%",
              padding: "0",
              margin: "0",
            }}
            src={curtainRight}
            alt="right half curtain"
          />
          <img
            ref={logoRef}
            style={{
              height: "20%",
              zIndex: "-1",
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            src={hullaLogoControl}
            alt="logo holding controller"
          />

          {/* <Row>
          <Col
            sm={12}
            className="section1"
            style={{
              overflowY: "hidden",
              width: "fitContent",
            }}
          >
            {twitchStats.data && twitchStats.data.length > 0
              ? twitchStats.data.map((stat, i) => (
                  <div
                    key={stat.id}
                    style={{ overflow: "hidden", objectFit: "contain" }}
                  >
                    <h4>{stat.display_name}</h4>
                    <img
                      src={stat.profile_image_url}
                      alt="thumbnail"
                      style={{
                        height: "50%",
                        width: "50%",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                ))
              : messageDisplay}
          </Col>
          <Col>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Enter twitch name..."
                ref={section1Ref}
              />
              <button onClick={twitchData} type="submit">
                ENTER
              </button>
              <p ref={section2Ref} style={{ display: "block", color: "red" }}>
                {errMessage}
              </p>
            </form>
          </Col>
        </Row> */}
        </div>
      </div>
    </>
  );
};

export default Home;

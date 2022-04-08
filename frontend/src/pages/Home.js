import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ExpoScaleEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import axios from "axios";
import curtainLeft from "../components/images/curtatins-Left.png";
import curtainRight from "../components/images/curtatins-Right.png";
import tvScreen from "../components/images/TV_Frame.svg";
import gamePic from "../components/images/elden_ring_test1.png"
import hullaLogoControl from "../components/images/controller_2021.svg";
import { useLayoutEffect } from "react";

import "../App.css";

//elements reference used for animation
const Home = () => {
  const appLogoRef = useRef(null);
  const mainDivRef = useRef(null);
  const xboxControlRef = useRef(null);
  const psControlRef = useRef(null);
  const section1Ref = useRef(null);
  const logoRef = useRef(null);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const startElementRef = useRef(null);
  const tvDiv = useRef(null);
  const tvRef = useRef(null);
  const gamePics = useRef(null);

  //Initiate the gsap timeline to execute animations uniformly
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
    //Registered for use in application
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);
    gsap.registerPlugin(ExpoScaleEase);
    gsap.registerPlugin(Flip);

    const state = Flip.getState(gamePics.current)
    
      gsap
        .timeline({
          scrollTrigger: {
            trigger: rightCurtain.current,
            start: "top top",
            end: "+=225%",
            pin: startElementRef.current,
            pinSpacing: false,
            scrub: 1,
            id: "right",
          },
        })
        .to(rightCurtain.current, { x: 3000 })
        .to(leftCurtain.current, { x: -3000 }, "<")
        .to(
          logoRef.current,
          {
            scale: 70,
            ease: "expoScale(1, 70, )",
          },
          "<"
        )
        .to(logoRef.current, {
          opacity: 0,
        })
        .fromTo(tvRef.current,{scale: 2}, { scale: 0.8, opacity: 1 }, ">")
        .to(gamePics.current, {scale: .8},">")
  }, []);

  // GET request for backend twtich api call
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
  // message not entered warning
  const messageDisplay = !twitchStats.data ? (
    " "
  ) : (
    <span style={{ color: "red" }}>{"USER DOESN'T EXIST"}</span>
  );

  return (
    <>
      {/* <NavigationBar /> */}
      <div ref={mainDivRef} style={{ height: "250vh" }} className="extends">
        <div
          ref={startElementRef}
          style={{
            position: "relative",
            padding: "0",
            margin: "0",
            overflow: "hidden",
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
              height: "10%",
              zIndex: "-1",
              position: "absolute",
              top: "10%",
              left: "40%",
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

          <img
            ref={tvRef}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              position: "absolute",
              top: "0%",
              left: "0%",
              zIndex: -1,
              objectFit: "contain",
              visibility: "hidden",
            }}
            src={tvScreen}
            alt="tv frame"
          />

          <img
            src={gamePic}
            ref={gamePics}
            style={{ zIndex: -1 }}
            alt="elden ring screen shot"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

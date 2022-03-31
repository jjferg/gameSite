import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ExpoScaleEase } from "gsap/EasePack";
import axios from "axios";
import xboxController from "../components/images/xboxcontrol.png";
import ps5Controller from "../components/images/ps5controller.png";
import curtainLeft from "../components/images/curtatins-Left.png";
import curtainRight from "../components/images/curtatins-Right.png";
import tvScreen from "../components/images/TV_Frame.svg";
import hullaLogoControl from "../components/images/controller_2021.svg";
import { useLayoutEffect } from "react";
import "../App.css";

//Registered for use in application
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ExpoScaleEase);

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
    tl.to(rightCurtain.current, {
      scrollTrigger: {
        trigger: rightCurtain.current,
        start: "top top",
        end: "125%",
        pin: startElementRef.current,
        pinSpacing: false,
        scrub: 1,
        markers: false,
        id: "right",
      },
      x: 3000,
      ease: "none",
    })
      .to(leftCurtain.current, {
        scrollTrigger: {
          trigger: leftCurtain.current,
          start: "top top",
          end: "125%",
          pin: startElementRef.current,
          pinSpacing: false,
          scrub: 1,
          markers: false,
          id: "left",
          onLeave: () =>
            gsap.to(logoRef.current, {
              opacity: 0,
            }),
          onEnterBack: () =>
            gsap.to(logoRef.current, {
              opacity: 1,
            }),
        },
        x: -3000,
        ease: "none",
      })
      .to(logoRef.current, {
        scrollTrigger: {
          start: "top top",
          end: "50%",
          scrub: 1,
          markers: false,
          id: "logo",
        },
        backgroundColor: 'white',
       
        ease: "expoScale(0.2, 50, slow)",
      })
      .to(tvDiv.current, {
        scale: 0.8,
        scrollTrigger: {
          trigger: tvDiv.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: true,
          id: "tvDiv",
          onLeave: () => {
            console.log("left");
            gsap.to(tvDiv.current, {
              scrollTrigger: {
                trigger: tvDiv.current,
                start: "top top",
                end: "+=50000",
                scrub: 1,
                pin: true,
                pinSpacing: false,
                markers: true,
                id: "tvDiv1",
              },
            });
          },
        },
      });
    gsap.to(tvDiv.current, {
      rotationY: "360deg",
      scrollTrigger: {
        trigger: tvDiv.current,
        start: "top top",
        end: "+=50000",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        markers: true,
        id: "tvDiv1",
   
      },
    });
  });

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
      <div ref={mainDivRef} style={{ backgroundColor:'black', height: "250vh" }} className="extends">
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
              height: "60%",
              zIndex: "-1",
              position: "absolute",
              top: "20%",
              left: "50%",
             
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
      <div ref={tvDiv} className="tvDiv">
        <img
          ref={tvRef}
          style={{ height: "100vh", width: "100%" }}
          src={tvScreen}
          alt="tv frame"
        />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Card } from "react-bootstrap";
import dame2kdunk from "../components/images/2kDameDunk.png";
import forza from "../components/images/forza.png";
import ja2kDunk from "../components/images/ja2kDunk.png";
import redDeadSun from "../components/images/redDeadSun.png";
import gameVid from "../components/images/PNG/eldenRingVideo.mp4";
import xbControl from "../components/images/xboxcontrol.png";
import hNamePlate from "../components/images/Hullanameplate.png";
import hHead from "../components/images/Hulla_with_hood_head.png";
import "./home.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //elements ref for animation
  const welcomeTextEl = useRef();
  const containerWidth = useRef();
  const gameVidEl = useRef();
  const gameVideo = useRef();
  const weGame = useRef();
  const leftBar = useRef();
  const falling = useRef();
  const circle = useRef();
  const pinnedRow = useRef();
  const section = useRef();
  const section3Ref = useRef();
  const divToPin = useRef();
  const cover33El = useRef();
  const dameDunkEl = useRef();
  const ja2kDunkEl = useRef();
  const forzaEl = useRef();
  const redDeadSunEl = useRef();
  const xbControlEl = useRef();
  const xbControlEl2 = useRef();
  const xbControlEl3 = useRef();
  const glory = useRef();
  const style = useRef();
  const adventure = useRef();
  const ja = useRef();
  const fundamental = useRef();
  const hasStarted = useRef(false);
  const timelineRef = useRef();

  const weGameSelector = gsap.utils.selector(circle);

  useEffect(() => {
    const video = document.getElementById("myVideo");
    //gsap animations
    let tl = null;
    const tl2 = gsap.timeline({ fastScrollEnd: true });
    const tl3 = gsap.timeline();
    const tl4 = gsap.timeline();

    gsap.set(xbControlEl.current, {
      position: "absolute",
      objectFit: "cover",
      height: "25%",
     
      zIndex: -1,
      bottom: "-770",
      autoAlpha: .5,
    });
    gsap.to(xbControlEl.current, {
      yPercent: -360,
      ease: "none",
      scrollTrigger: {
        trigger: circle.current,
        start: "top middle",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.set(xbControlEl2.current, {
      position: "absolute",
      objectFit: "cover",
      height: "25%",
    
      zIndex: -1,
      bottom: "-770",
      autoAlpha: .5,
    });
    gsap.to(xbControlEl2.current, {
      yPercent: -220,
      ease: "none",
      scrollTrigger: {
        trigger: circle.current,
        start: "top middle",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.set(xbControlEl3.current, {
      position: "absolute",
      objectFit: "cover",
      height: "25%",
     
      zIndex: -1,
      bottom: "-770",
      autoAlpha: .5,
    });

    gsap.to(xbControlEl3.current, {
      yPercent: -400,
      ease: "none",
      scrollTrigger: {
        trigger: circle.current,
        start: "top middle",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      gameVidEl.current,
      {
        boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
      },
      {
        boxShadow: "0 0 30px rgba(235, 234, 241, 0.83)",
        duration: 0.1,
        repeat: 14,
        yoyo: true,
        delay: 2,
      }
    );
    gsap.fromTo(
      falling.current,
      {
        boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
      },
      {
        boxShadow: "0 0 30px rgba(235, 234, 241, 0.83)",
        duration: 0.1,
        repeat: 14,
        yoyo: true,
        delay: 2,
      }
    );

    gsap.set(falling.current, { transformOrigin: "100% 100%" });

    gsap.from(falling.current, {
      yPercent: "20",
      rotation: () => -180,
      duration: 1.5,
    });

    tl = gsap.timeline({ paused: true });
    tl.to(".video-el", {
      keyframes: {
        //shake screen
        x: [-20, 14, -17, 4, 23, 0],
        y: [24, -12, 17, -7, 30, 0],
      },
      duration: 0.5,
    }).to(".falling", {
      yPercent: "1600",
      rotationX: 2100,
      duration: 4,
    });

    const checkTime = () => {
      if ((video.currentTime >= 16.5) & (video.currentTime < 16.8)) {
        tl.play();
      }
      requestAnimationFrame(checkTime);
    };

    requestAnimationFrame(checkTime);

    tl2
      .from(weGameSelector(".left-bar"), {
        yPercent: "-50",
        autoAlpha: 0,
        stagger: 0.4,
      })
      .from(
        weGameSelector(".we-game"),
        {
          yPercent: "30",
          autoAlpha: 0,
          stagger: 0.4,
        },
        "<"
      )
      .from(
        weGameSelector(".right-bar"),
        {
          yPercent: "50",
          autoAlpha: 0,
          stagger: 0.4,
        },
        "<"
      )
      .set(
        weGameSelector(".right-bar"),
        {
          position: "absolute",
          zIndex: 10,
        },
        "<"
      )
      .set(weGameSelector(".left-bar"), {
        position: "absolute",
        zIndex: 10,
      })
      .to(
        weGameSelector(".right-bar"),
        {
          yPercent: "2000",
          xPercent: "-2000",
          stagger: 0.6,
          rotation: 360,
        },
        "-=.5"
      )
      .to(
        weGameSelector(".left-bar"),
        {
          yPercent: "2000",
          xPercent: "2000",
          stagger: 0.6,
          rotation: 360,
        },
        "<"
      )
      .set(weGameSelector(".right-bar"), {
        position: "static",
        zIndex: 10,
      })
      .set(weGameSelector(".left-bar"), {
        position: "static",
        zIndex: 10,
      });

    ScrollTrigger.create({
      animation: tl2,
      trigger: weGame.current,
      scrub: true,
      start: "top center+=300",
      end: "bottom top",
    });

    // gsap.from(xbControlEl.current, {
    //   autoAlpha: 0,
    //   scrollTrigger: {
    //     trigger: xbControlEl.current,
    //     start: "center center",
    //     scrub: true,
    //   },
    // });

    // tl3
    //   .to(
    //     xbControlEl.current,
    //     {
    //       xPercent: "600",
    //       duration: 65,
    //     },
    //     ">"
    //   )
    //   .to(
    //     cover33El.current,
    //     {
    //       xPercent: "300",
    //       duration: 65,
    //     },
    //     "<"
    //   )
    //   .to(divToPin.current, {
    //     scale: 1.2,
    //     duration: 30,
    //   })
    //   .from(dameDunkEl.current, {
    //     xPercent: "300",
    //     duration: 65,
    //   })
    //   .from(
    //     glory.current,
    //     {
    //       yPercent: "230",
    //       autoAlpha: 0,
    //       duration: 65,
    //     },
    //     "<+=1"
    //   )
    //   .from(forzaEl.current, {
    //     xPercent: "300",
    //     duration: 65,
    //   })
    //   .from(
    //     style.current,
    //     {
    //       autoAlpha: 0,
    //       duration: 65,
    //     },
    //     "<+=1.5"
    //   )
    //   .from(redDeadSunEl.current, {
    //     xPercent: "-300",
    //     duration: 65,
    //   })
    //   .from(
    //     adventure.current,
    //     {
    //       autoAlpha: 0,
    //       duration: 65,
    //     },
    //     "<+=1.5"
    //   )
    //   .from(ja2kDunkEl.current, {
    //     xPercent: "300",
    //     duration: 65,
    //   })
    //   .from(
    //     ja.current,
    //     {
    //       autoAlpha: 0,
    //       duration: 65,
    //     },
    //     "<+=1.5"
    //   )
    //   .to(
    //     divToPin.current,
    //     {
    //       delay: 4,
    //       scale: 0.8,
    //       duration: 30,
    //     },
    //     ">"
    //   );
    // ScrollTrigger.create({
    //   animation: tl3,
    //   trigger: divToPin.current,
    //   start: "top top",
    //   end: "3500",
    //   pinSpacer: false,
    //   normalizeScroll: true,
    //   scrub: true,
    //   pin: true,
    //   snap: [0.2, 0.4, 0.58, 0.74, 0.92, 1],
    //   ease: "none",
    //   toggleActions: "restart none none reverse",
    // });

    // tl4
    //   .set(fundamental.current, { rotationX: 80 })
    //   .fromTo(
    //     fundamental.current,
    //     {
    //       xPercent: 80,
    //     },
    //     {
    //       duration: 1.5,
    //       xPercent: 0,
    //       rotationX: 80,
    //     }
    //   )
    //   .to(fundamental.current, {
    //     duration: 1.5,
    //     rotationX: 0,
    //   });

    // ScrollTrigger.create({
    //   animation: tl4,
    //   trigger: fundamental.current,
    //   start: "top bottom",
    // });
    // return () => {
    //   tl.kill();
    //   tl2.kill();
    //   tl3.kill();
    // };
  }, []);

  return (
    <>
      <Container
        ref={containerWidth}
        style={{ color: "green" }}
        className="container1"
      >
        <Row className="align-items-center">
          <div
            ref={gameVidEl}
            className="mt-4 video-el bg-dark text-white rounded"
          >
            <video
              id="myVideo"
              className="video1"
              autoPlay={true}
              loop={true}
              controls={false}
              playsInline
              muted
              ref={gameVideo}
              src={gameVid}
              type="video/mp4"
            />
            <h1 className="welcome-text" ref={welcomeTextEl}>
              <div ref={falling} className="welcome falling">
                <div style={{ display: "inline" }}>A HULLAGHAN'S</div>
                <div style={{ display: "inline" }}> WELCOME!</div>
              </div>
            </h1>
          </div>
        </Row>
        <Row >
          <Col >
            <img
              
              ref={xbControlEl}
              src={hHead}
              alt="hullaghan head"
            ></img>
          </Col>
          <Col >
            <img
              
              ref={xbControlEl2}
              src={hNamePlate}
              alt="Hullaghan name plate"
            ></img>
          </Col>{" "}
          <Col>
            <img
              
              ref={xbControlEl3}
              src={hHead}
              alt="hullaghan head"
            ></img>
          </Col>
        </Row>
        <Row ref={pinnedRow} className="section-two align-items-center">
          <Col>
            <div ref={circle} className="circle ">
              <div style={{ position: "relative", zIndex: "-1" }}>
                <div
                  ref={leftBar}
                  className="left-bar"
                  style={{
                    position: "absolute",
                    height: "80%",
                  }}
                >
                  {" "}
                </div>
                <span ref={weGame} className="we-game we-game-text">
                  GAME
                </span>
                <div className="right-bar"></div>
              </div>
              <div style={{ position: "relative" }}>
                {" "}
                <div
                  ref={leftBar}
                  className="left-bar"
                  style={{
                    position: "absolute",
                    height: "80%",
                  }}
                >
                  {" "}
                </div>
                <span ref={weGame} className="we-game we-game-text">
                  OR
                </span>
                <div className="right-bar"></div>
              </div>
              <div style={{ position: "relative" }}>
                <div ref={leftBar} className="left-bar">
                  {" "}
                </div>
                <span ref={weGame} className="we-game we-game-text">
                  DIE
                </span>
                <div className="right-bar"></div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row>
          <div ref={divToPin} className="divToPin">
            <div ref={section} className="section">
              <Col>
                <div ref={cover33El} className="section33"></div>
                <img
                  ref={xbControlEl}
                  className="xbox-controller"
                  src={xbControl}
                  alt="xbox controller"
                />
                <div className="section3" ref={section3Ref}>
                  <p className="why-game">
                    WHY GAME <span style={{ color: "red" }}>?</span>
                  </p>
                  <div>
                    <img
                      ref={dameDunkEl}
                      className="section34 why-game"
                      src={dame2kdunk}
                      alt="nba 2k dunk"
                    />
                    <span ref={glory} className="glory">
                      GLORY
                    </span>
                  </div>
                  <div>
                    <img
                      ref={forzaEl}
                      className="section34 why-game"
                      src={forza}
                      alt="forza car"
                    />
                    <span ref={style} className="glory">
                      STYLE
                    </span>
                  </div>
                  <div>
                    <img
                      ref={redDeadSunEl}
                      className="section34 why-game"
                      src={redDeadSun}
                      alt="red dead sun"
                    />
                    <span ref={adventure} className="glory adventure">
                      ADVENTURE
                    </span>
                  </div>
                  <div>
                    <img
                      ref={ja2kDunkEl}
                      className="section34 why-game"
                      src={ja2kDunk}
                      alt="ja dunk"
                    />
                    <span ref={ja} className="glory">
                      JA
                    </span>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </Row> */}
      </Container>
      <Row>
        <div></div>
        <div className="fundamentals-div">
          <p
            ref={fundamental}
            className="fundamentals"
            style={{ fontSize: "2.3em", color: "blue" }}
          >
            FUN DA MENTAL
          </p>
        </div>
      </Row>
    </>
  );
};

export default Home;

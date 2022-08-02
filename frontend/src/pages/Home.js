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
import "./home.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  //elements ref for animation
  const welcomeTextEl = useRef();
  const gameVidEl = useRef();
  const gameVideo = useRef();
  const weGame = useRef();
  const leftBar = useRef();
  const falling = useRef();
  const circle = useRef();
  const pinnedRow = useRef();
  const section = useRef();
  const cover33El = useRef();
  const dameDunkEl = useRef();
  const ja2kDunkEl = useRef();
  const forzaEl = useRef();
  const redDeadSunEl = useRef();
  const xbControlEl = useRef();
  const glory = useRef();
  const style = useRef();
  const adventure = useRef();
  const ja = useRef();
  const fundamental = useRef();

  const weGameSelector = gsap.utils.selector(circle);
  const didAnimate = useRef(false);

  useEffect(() => {
   const visible = document.visibilityState
   console.log(setTimeout( console.log(visible), 5000))

    if (didAnimate.current) {
      return;
    }
    // otherwise, record that we're running it now and continue...
    didAnimate.current = true;

    ScrollTrigger.refresh();
    //gsap animations
    const tl = gsap.timeline({
      toggleActions: "restart none none reverse",
      fastScrollEnd:true,
    });
    const tl2 = gsap.timeline({ fastScrollEnd: true });
    gsap.set(falling.current, { transformOrigin: "100% 100%" });

    gsap.from(gameVidEl.current, {
      autoAlpha: 0,
      delay: 0.8,
      onComplete: () => { gameVideo.current.play() },
    })
    tl.to(
      gameVideo.current,
      {
        autoAlpha: 1,
        duration: 1.5,
        currentTime: 27.8
      },{ 

      }
    )
      .from(
        welcomeTextEl.current,
        {
          autoAlpha: 0,
          duration: 1.5,
          delay: 0.5,
        },
        "<"
      )
      .from(falling.current, {
        yPercent: "20",
        rotation: () => -180,
        duration: 1.5,
      })
      .to(
        gameVidEl.current,
        {
          delay: 18.7,
          keyframes: {
            x: [-20, 14, -17, 4, 23, 0],
            y: [24, -12, 17, -7, 30, 0],
          },
          duration: 0.5,
        },
        ""
      )
      .to(falling.current, {
        yPercent: "1600",
        rotationX: 2100,
        duration: 4,
      });

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
      .set(weGameSelector(".right-bar"), {
        position: "absolute",
        zIndex: 10,
      })
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

    gsap.from(xbControlEl.current, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: xbControlEl.current,
        start: "center center",
        scrub: true,
      },
    });

    const tl3 = gsap.timeline();
    tl3
      .to(
        xbControlEl.current,
        {
          xPercent: "600",
          duration: 25,
        },
        ">"
      )
      .to(
        cover33El.current,
        {
          xPercent: "300",
          duration: 25,
        },
        "<"
      )
      .from(dameDunkEl.current, {
        xPercent: "300",
        duration: 15,
      })
      .from(
        glory.current,
        {
          yPercent: "230",
          autoAlpha: 0,
          duration: 35,
        },
        "<+=1"
      )
      .from(forzaEl.current, {
        xPercent: "300",
        duration: 15,
      })
      .from(
        style.current,
        {
          autoAlpha: 0,
          duration: 35,
        },
        "<+=1.5"
      )
      .from(redDeadSunEl.current, {
        xPercent: "-300",
        duration: 15,
      })
      .from(
        adventure.current,
        {
          autoAlpha: 0,
          duration: 35,
        },
        "<+=1.5"
      )
      .from(ja2kDunkEl.current, {
        xPercent: "300",
        duration: 15,
      })
      .from(
        ja.current,
        {
          autoAlpha: 0,
          duration: 35,
        },
        "<+=1.5"
      );
    ScrollTrigger.create({
      anticipatePin: 1,
      animation: tl3,
      trigger: section.current,
      start: "top top",
      end: "2000",
      scrub: 0.004,
      pin: true,
      snap: 1 / 8,
      ease: "power2.out",
      toggleActions: "restart none none reverse",
    });

    gsap.from(fundamental.current, {
      autoAlpha: 0,
      duration: 5,
      xPercent: 80,
      scrollTrigger: {
        trigger: fundamental.current,
        start: "top bottom",
        toggleActions: "restart none none reverse",
      },
    });
  });
  

  return (
    <>
      <Container style={{ color: "green" }} className="container1">
        <Row className="align-items-center">
          <div
            ref={gameVidEl}
            className="mt-4 video-el bg-dark text-white rounded"
          >
            <video
          
              className="video1"
              autoPlay={false}
              loop={true}
              controls={false}
              playsInline
              muted
              ref={gameVideo}
              src={gameVid}
              type="video/mp4"
            />
            <h1 className="welcome-text" ref={welcomeTextEl}>
              <div ref={falling} className="welcome">
                <div style={{ display: "inline" }}>A HULLAGHAN'S</div>
                <div style={{ display: "inline" }}> WELCOME!</div>
              </div>
            </h1>
          </div>
        </Row>
        <Row ref={pinnedRow} className="section-two align-items-center">
          <Col sm={12}>
            <div ref={circle} className="circle ">
              <div style={{ position: "relative" }}>
                <div
                  ref={leftBar}
                  className="left-bar"
                  style={{
                    backgroundColor: "green",
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
                    backgroundColor: "green",
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
        <Row>
          <div ref={section} className="section">
            <Col>
              <div ref={cover33El} className="section33"></div>
              <img
                ref={xbControlEl}
                className="xbox-controller"
                src={xbControl}
                alt="xbox controller"
              />
              <div className="section3">
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
        </Row>
      </Container>
      <Row>
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

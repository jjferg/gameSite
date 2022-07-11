import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Card} from "react-bootstrap";
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
  const circle = useRef();
  const pinnedRow = useRef();
  const section = useRef();
  const cover33El = useRef();
  const dameDunkEl = useRef();
  const ja2kDunkEl = useRef();
  const forzaEl = useRef();
  const redDeadSunEl = useRef();
  const xbControlEl = useRef();
  const glory = useRef()

  const weGameSelector = gsap.utils.selector(circle);

  useEffect(() => {
    //gsap animations
    const tl = gsap.timeline();
    tl.from(gameVidEl.current, {
      autoAlpha: 0,
      duration: 1,
      delay: 0.8,
    })
      .from(gameVideo.current, {
        autoAlpha: 0,
        duration: 1.5,
      })
      .from(
        welcomeTextEl.current,
        {
          autoAlpha: 0,
          duration: 1.5,
          delay: 0.5,
        },
        "<"
      );

    gsap.from(weGameSelector(".we-game"), {
      autoAlpha: 0,
      stagger: 0.3,
      yPercent: "30",
      scrollTrigger: {
        trigger: weGame.current,
        start: "top center+=300",
        preventOverlaps: true,
      },
    });

    gsap.from(xbControlEl.current, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: xbControlEl.current,
        start: "center center",
        scrub: true,
      },
    });
  }, [ weGameSelector]);

  useLayoutEffect(() => {
    const tl2 = gsap.timeline();
    tl2
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
    
      }).from(glory.current,{
        yPercent: -10,
        autoAlpha: 0,
        duration: 15
      },"<")
      .to(glory.current,{
        yPercent: -10,
        autoAlpha: 0,
        duration: 15
      },">")
        .from(forzaEl.current, {
        xPercent: "300",
        duration: 15,
  
      })
      .from(redDeadSunEl.current, {
        xPercent: "-300",
        duration: 15,
       
      })
      .from(ja2kDunkEl.current, {
        xPercent: "300",
        duration: 15,
       
      });
      ScrollTrigger.create({
        animation: tl2,
        trigger: section.current,
        start: "top top",
        end: "2000",
        scrub: .004,
        scale: 2,
        pin: true,
        snap: 1/6,
        ease: "none"
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
              <div className="welcome">A HULLAGHAN'S WELCOME!</div>
            </h1>
          </div>
        </Row>
        <Row ref={pinnedRow} className="section-two align-items-center">
          <Col sm={12}>
            <div ref={circle} className="circle ">
              <span ref={weGame} className="we-game we-game-text">
                GAME
              </span>
              <span ref={weGame} className="we-game we-game-text">
                OR
              </span>
              <span ref={weGame} className="we-game we-game-text">
                DIE
              </span>
            </div>
          </Col>
        </Row>
        <div ref={section} className="section">
          <Row>
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

                <img
                  style={{ zIndex: 5 }}
                  ref={dameDunkEl}
                  className="section34 why-game"
                  src={dame2kdunk}
                  alt="nba 2k dunk"
                />
                <img
                  ref={forzaEl}
                  className="section34 why-game"
                  src={forza}
                  alt="forza car"
                />
                <p
                  ref={glory}
                  style={{
                    fontSize: "300px",
                    position: "absolute",
                    bottom: "50%",
                    zIndex: 5,
                    visibility: "hidden",
                  }}
                >
                  GLORY!!
                </p>
                <img
                  ref={redDeadSunEl}
                  className="section34 why-game"
                  src={redDeadSun}
                  alt="red dead sun"
                />
                <img
                  ref={ja2kDunkEl}
                  className="section34 why-game"
                  src={ja2kDunk}
                  alt="ja dunk"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;

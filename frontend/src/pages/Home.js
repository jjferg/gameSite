import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import dame2kdunk from "../components/images/2kDameDunk.png";
import gameVid from "../components/images/PNG/eldenRingVideo.mp4";
import xbControl from "../components/images/xboxcontrol.png";
import "./home.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //elements ref for animation
  const welcomeTextEl = useRef();
  const gameVidEl = useRef();
  const gameVideo = useRef();
  const card1El = useRef();
  const weGame = useRef();
  const circle = useRef();
  const pinnedRow = useRef();
  const cover33El = useRef();
  const cover34El = useRef();
  const section = useRef();
  const xbControlEl = useRef();

  const weGameSelector = gsap.utils.selector(circle);

  useEffect(() => {
    const load = false
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
    ScrollTrigger.create({
      animation: tl2,
      trigger: section.current,
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
    });
    tl2
      .to(
        xbControlEl.current,
        {
          xPercent: "600",
          duration: 10,
        },
        ">"
      )
      .to(
        cover33El.current,
        {
          xPercent: "300",
          duration: 10,
        },
        "<"
      )
      .from(cover34El.current, {
        xPercent: "-300",
        duration: 10,
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
                    ref={cover34El}
                    className="section34 why-game"
                    src={dame2kdunk}
                    alt="nba 2k dunk"
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

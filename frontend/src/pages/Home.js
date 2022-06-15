import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, Container, Row, Col, Carousel, } from "react-bootstrap";
import gamePic from "../components/images/PNG/elden_ring_test1.png";
import gameVid from "../components/images/PNG/eldenRingVideo.mp4";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //elements reference used for animation
  const welcomeTextEl = useRef();
  const gameVidEl = useRef();
  const card1El = useRef();
  const weGame = useRef();
  const circle = useRef();
  const pinnedRow = useRef();

  const weGameSelector = gsap.utils.selector(circle);

  useEffect(() => {
    //gsap animations
    const tl = gsap.timeline();
    tl.from(gameVidEl.current, {
      autoAlpha: 0,
      duration: 1,
      delay: 0.8,
    }).from(welcomeTextEl.current, {
      autoAlpha: 0,
      duration: 1.5,
      delay: 0.5,
    });
    gsap.from(card1El.current, {
      autoAlpha: 0,
      duration: 1.5,
      y: "15%",
      scrollTrigger: {
        trigger: card1El.current,
        start: "top 80%",
      },
    });
    gsap.from(
      weGameSelector(".we-game"),
      {
        autoAlpha: 0,
        stagger: 0.3,
        y: "30%",
        scrollTrigger: {
          trigger: weGame.current,
          start: "top 800px",
        },
      },
      ">"
    );
  });

  return (
    <>
      <div className="nav-crossbar"></div>

      <Container className="container1">
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
              ref={gameVidEl}
              src={gameVid}
              type="video/mp4"
            />
            <h1 className="welcome-text" ref={welcomeTextEl}>
              A HULLAGHAN'S WELCOME!
            </h1>
          </div>
        </Row>
        <Row ref={pinnedRow} className="section-two align-items-center">
          <Col>
          <div ref={card1El}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={gamePic}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={gamePic}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={gamePic}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                   
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          </Col>
          <Col>
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
        <div>Hulla Verse</div>
        <div>Hulla Verse</div>
        <div>Hulla Verse</div>
        <div>Hulla Verse</div>
        <div>Hulla Verse</div>
        <div>Hulla Verse</div>
      </Container>
    </>
  );
};

export default Home;

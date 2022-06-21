import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import gamePic from "../components/images/PNG/elden_ring_test1.png";
import gameVid from "../components/images/PNG/eldenRingVideo.mp4";
import xbControl from "../components/images/xboxcontrol.png"
import "./home.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //elements reference used for animation
  const welcomeTextEl = useRef();
  const gameVidEl = useRef();
  const card1El = useRef();
  const weGame = useRef();
  const circle = useRef();
  const pinnedRow = useRef();
  const cover33 = useRef();

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
      y: "5%",
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
          start: "top center+=200",
        },
      },
      ">"
    );
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
              ref={gameVidEl}
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
          <Col sm={12}>
            <div className="carousel1" ref={card1El}>
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
                    <p></p>
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
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <section>
          <Row>
            <Col>
              <div className="section3">
                <img
                  className="xbox-controller"
                  src={xbControl}
                  alt="xbox controller"
                />
                <p className="why-game">
                  WHY GAME <span style={{ color: "red" }}>?</span>
                </p>
                <div ref={cover33} className="section33"></div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, Container, Row, Col } from "react-bootstrap";
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

  useEffect(() => {
    //gsap animations
    const tl = gsap.timeline();
    tl.from(gameVidEl.current, {
      autoAlpha: 0,
      duration: 1,
      delay: 0.8,
    })
      .from(welcomeTextEl.current, {
        autoAlpha: 0,
        duration: 1.5,
        delay: .5,
      })
      gsap.from(card1El.current, {
        autoAlpha: 0,
        duration: 1.5,
        y: "15%",
        scrollTrigger: {
          trigger: card1El.current,
          start: "center 80%",
        },
      })
      gsap.from(circle.current, {
        autoAlpha: 0,
        duration: 2.5,
        x: "40%",
        scrollTrigger: {
          trigger: circle.current,
          start: "center 80%",
        },
      })
      gsap.from(weGame.current, { 
        autoAlpha: 0, duration: 1.5, x: "-40%", scrollTrigger: {
          trigger: circle.current,
          start: "center 80%",
        }
      })
      
  });

  return (
    <>
      <div className="nav-crossbar"></div>
      <div className="vertical-bar"></div>
      <Container className="container1">
        <Row>
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
        <Row className="align-items-center">
          <Col>
            <Card
              ref={card1El}
              className="mt-4"
              style={{ width: "18rem", visibility: "hidden" }}
            >
              <Card.Img variant="top" src={gamePic} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div ref={circle} className="circle m-4.5 ">
              <div ref={weGame} className="we-game ">
                We gaming over Here Son
              </div>
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

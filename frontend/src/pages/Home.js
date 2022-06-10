import React, { useRef } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, Container } from "react-bootstrap";
import gamePic from "../components/images/PNG/elden_ring_test1.png";
import gameVid from "../components/images/PNG/eldenRingVideo.mp4";
import { useLayoutEffect } from "react";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  //elements reference used for animation
  const welcomeTextEl = useRef();
  const gameVidEl = useRef();
  const card1El = useRef();

  useLayoutEffect(() => {
    //gsap animations 
    const tl = gsap.timeline();
    tl.from(gameVidEl.current, {
      autoAlpha: 0,
      duration: 1,
      delay: 0.8,
    }).from(welcomeTextEl.current, {
      autoAlpha: 0,
      duration: 1.5,
      delay: 2,
    });
    gsap.from(card1El.current, {
      autoAlpha: 0,
      duration: 1.5,
      y: "10%",
      scrollTrigger: {
        trigger: card1El.current,
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <div className="nav-crossbar"

      ></div>
      <Container className="container1" >
        <div
        className="vertical-bar"
        ></div>

        <div
          ref={gameVidEl}
          className="mt-4 video-el   bg-dark text-white rounded"

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
          <h1
            className="welcome-text"
            ref={welcomeTextEl}
          >
            A HULLAGHAN'S WELCOME!
          </h1>
        </div>
        <Card
          ref={card1El}
          className="mt-4"
          style={{ width: "18rem", visibility: "hidden" }}
        >
          <Card.Img variant="top" src={gamePic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <div>Hulla Verse</div>
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

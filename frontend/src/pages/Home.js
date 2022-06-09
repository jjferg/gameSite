import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ExpoScaleEase } from "gsap/EasePack";
import { Card, Button, Container } from "react-bootstrap";
import gamePic from "../components/images/PNG/elden_ring_test1.png";
import gameVid from "../components/images/PNG/eldenRingVideo.mp4";
import { useLayoutEffect } from "react";
import "../App.css";
gsap.registerPlugin(ScrollTrigger)

//elements reference used for animation
const Home = () => {
  const welcomeTextEl = useRef();
  const gameVidEl = useRef();
  const card1El = useRef();

  useEffect(() => {
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
        start: "top center"
      },
    });
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "1000%",
          width: "10%",
          right: "0%",
          top: "0%",
          zIndex: "-3",
          backgroundColor: "rgba(88, 198, 1, 0.3)",
        }}
      ></div>
      <Container style={{ height: "200vh" }}>
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            height: "10%",
            width: "100%",
            right: "0%",
            top: "1%",
            backgroundColor: "rgb(94, 87, 154)",
          }}
        ></div>

        <div
          ref={gameVidEl}
          className="mt-4   bg-dark text-white rounded"
          style={{
            visibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            boxShadow: " 0px 5px 10px 0px rgba( 0,255,255, 0.7 )",
          }}
        >
          <video
            autoPlay={true}
            loop={true}
            controls={false}
            playsInline
            muted
            ref={gameVidEl}
            src={gameVid}
            type="video/mp4"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1,
              objectFit: "cover",
              opacity: 0.5,
            }}
          />
          <h1
            ref={welcomeTextEl}
            style={{
              zIndex: 1,
              position: "relative",
              textAlign: "center",
            }}
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
            <Button
              style={{ zIndex: 2, position: "relative" }}
              variant="primary"
            >
              Go somewhere
            </Button>
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

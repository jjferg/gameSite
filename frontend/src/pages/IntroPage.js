import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import leftHulla from "../components/images/PNG/leftHulla.png";
import rightHulla from "../components/images/PNG/rightHulla.png";

const IntroPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const leftH = useRef();
  const rightH = useRef();

  const didAnimate = useRef(false);
  useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    const introPage = () => {
      navigate("/home");
    };

    const visible = document.visibilityState;
    const tl = gsap.timeline({ delay: 0.5, restart: true });
    if (visible) {
      tl.play();
    } else {
      tl.pause();
    }
    tl.fromTo(leftH.current, { y: "-120%" }, { y: 0, duration: 2 })
      .fromTo(rightH.current, { y: "-120%" }, { y: 0, duration: 2 }, "<")
      .to(leftH.current, { x: "-100%", duration: 2, delay: 2 })
      .to(
        rightH.current,
        { x: "100%", duration: 2, onComplete: introPage },
        "<"
      );
  }, [loading, navigate]);

  return (
    <div className="containers" style={{ height: "100vh", overflow: "hidden" }}>
      <img
        ref={leftH}
        src={leftHulla}
        alt="left side logo"
        style={{
          position: "absolute",
          zIndex: 2,
          width: "50%",
          height: "100vh",
          backgroundColor: "black",
        }}
      />

      <img
        ref={rightH}
        src={rightHulla}
        alt="right side logo"
        style={{
          position: "absolute",
          right: "0",
          zIndex: 2,
          width: "50%",
          height: "100vh",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

export default IntroPage;

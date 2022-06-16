import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Hullagahn_logo5.svg";
import leftHulla from "../components/images/PNG/leftHulla.png";
import rightHulla from "../components/images/PNG/rightHulla.png";

const IntroPage = () => {
  const navigate = useNavigate();
  const leftH = useRef();
  const rightH = useRef();

  const introPage = () => {
    navigate("/home");
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(leftH.current, { y: "-100%" }, { y: 0, duration: 2 })
      .fromTo(rightH.current, { y: "-100%" }, { y: 0, duration: 2 }, "<")
      .to(leftH.current, { x: "-100%", duration: 2, delay: 2 })
      .to(
        rightH.current,
        { x: "100%", duration: 2, onComplete: introPage },
        "<"
      );
  });

  return (
    <div className="containers">
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

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Hullagahn_logo5.svg";



const IntroPage = () => {
  const navigate = useNavigate();
  const logo = useRef();
  const com = useRef();

  const introPage = () => {
      navigate("/home");
  };
  const tl = gsap.timeline();
  
  useEffect(() => {
    if (window.screen.width > 400) {
      tl.fromTo(
        logo.current,
        {
          //from position
          y: -300,
          x: -300,
          scale: 0.05,
        },
        {
          // to position
          y: 0,
          x: 200,
          scale: 1,
          ease: "none",
          duration: 1,
          rotateY: 1080,
        }
      )
        .to(logo.current, {
          x: 100,
          duration: 1,
          delay: 2,
        })
        .to(com.current, {
          x: 60,
          y: -40,
          autoAlpha: 1,
          duration: 2,
        })
        .to(logo.current, {
          y: "-72%",
          x: "140%",
          scale: 0.18,
          delay: 3,
        })
        .to(com.current, { autoAlpha: 0, duration: 1 })
        .to(logo.current, {
          onComplete: introPage,
        });
    } else {
      tl.fromTo(
        logo.current,
        {
          x: 1000,
        },
        { x: 100, duration: 2, rotateZ: 360 }
      )
        .to(logo.current, { x: 50, duration: 1, delay: 2 })
        .to(com.current, {
          x: 40,
          y: -20,
          autoAlpha: 1,
          duration: 2,
        })
        .to(logo.current, {
          y: "-242%",
          x: "140%",
          scale: 0.18,
          delay: 3,
        })
        .to(com.current, { autoAlpha: 1, duration: 1 })
        .to(logo.current, {
          onComplete: introPage,
        });;
    }
  });

  return (
    <div className="containers">
      <Logo className="logo" ref={logo} />
      <div className="com" ref={com}>
        .COM
      </div>
    </div>
  );
};

export default IntroPage;

import React, { useEffect, useRef, useLayoutEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ReactComponent as Logo } from "../Hullagahn_logo5.svg";
import xboxController from "../components/images/xboxcontrol.png";
import ps5Controller from "../components/images/ps5controller.png";
import vid from "../components/images/starWars.mp4";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Home = () => {
  const appLogoRef = useRef(null);
  const xboxControlRef = useRef(null);
  const psControlRef = useRef(null);
  const section1Ref = useRef(null);
  const starWarsVidRef = useRef(null);
  const startElementRef = useRef(null);



  // useEffect(() => {
  //     gsap.to(appLogo.current, {
  //       ease: "none",
  //       yoyo: true,
  //       duration: 5,
  //       repeat: -1,
  //       rotationY: "360deg",
  //     });
  // }, []);
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to(xboxControlRef.current, {
      scrollTrigger: {
        trigger: xboxControlRef.current,
        start: "top center",
        onEnter: () => {
          gsap.to(section1Ref.current, {
            duration: 1.0,
            backgroundColor: "#000000",
          });
        },
        onEnterBack: () => {
          gsap.to(section1Ref.current, {
            duration: 1.0,
            backgroundColor: "#ffffff",
          });
        },
      
        scrub: true,
      },
      autoAlpha: 1,
      x: 250,
    });
  }, []);

  useEffect(() => { 
    starWarsVidRef.current.currentTime = 0
    ScrollTrigger.create({
      trigger: startElementRef.current,
      scrub: true,
      pin: startElementRef.current,
      start: "top 0",
      end: "+=47777 0",
      duration: 1,
      markers: true,
      onUpdate: function (self) {
        let y = window.scrollY;
     

        if (starWarsVidRef.current) {
          const scrollPos = self.progress;
          const videoDuration = starWarsVidRef.current.duration;
          const videoProgress = scrollPos * videoDuration;
          if (videoProgress) {
            console.log(videoDuration)
            starWarsVidRef.current.currentTime = videoProgress;
          }
        }
      },
    });
  }, [starWarsVidRef, startElementRef]);

  return (
    <>
      <NavigationBar />
      {/* <div className="container backGround">
        <Logo
          ref={appLogoRef}
          style={{
            height: "5rem",
            position: "absolute",
            right: "15px",
            top: "15px",
          }}
        />
      </div> */}
      <div className="section1" ref={section1Ref}>
        {/* <img
          className="xboxController"
          src={xboxController}
          alt="xbox elite controller"
          ref={xboxControlRef}
        /> */}
        {/* <img
          className="ps5Controller"
          src={ps5Controller}
          alt="playstation 5 white controller"
        /> */}
      </div>
      <div
        className="starVid"
        ref={startElementRef}
     
        webkit-playsInline="true"
        preload="auto"
      >
        <video
          ref={starWarsVidRef}
          src="https://vjs.zencdn.net/v/oceans.mp4"
          allowFullScreen
        ></video>
      </div>
    </>
  );
};

export default Home;

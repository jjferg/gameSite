import { Navbar, Nav } from "react-bootstrap";
import { useRef, useEffect, useState} from "react"
import "./nav.css";
import gsap from "gsap"


const Footer = () => {

const footerEl = useRef();

//conditional to prevent footer showing ahead of js loading
const footerPosition = window.location.pathname === "/home" ? "visible" : "hidden"

useEffect(() => {
  const tl = gsap.timeline()
    tl.from(footerEl.current, {
    autoAlpha: 0,
    delay: 10
    });
    return () => {
      gsap.kill(tl)
    }
  })

  return (
    <>
      <Navbar style={{visibility: footerPosition}}ref={footerEl} bg="dark" variant="dark" className=" justify-content-center">
          <p style={{ color: "rgb(88, 198, 1)",  }}> &copy; Hullaghan 2022 </p>
      </Navbar>
    </>
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from "react";
import curtainLeft from "../components/images/curtatins-Left.png";
import curtainRight from "../components/images/curtatins-Right.png";
import hullaLogo from "../components/images/ps5controller.png"


function Example() {

  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);

  return (
    <div className='mainDiv'>
  
      <img
        ref={leftCurtain}
        style={{
          height: "100vh",
          width: "50%",
          padding: "0",
          margin: "0",
        }}
        src={hullaLogo}
        alt="left half curtain"
      />
      <img
        ref={rightCurtain}
        style={{
          height: "100vh",
          width: "50%",
          padding: "0",
          margin: "0",
        }}
        src={curtainRight}
        alt="right half curtain"
      />
    </div>
  );
}

export default Example
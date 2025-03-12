import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./AnimatedBox.css";
import LowerCornerMenu from "./LowerCornerMenu";
import LogoContainer from "./LogoContainer";
import ServicesAndSocial from "./ServicesAndSocial";
import UpperCornerMenu from "./UpperCornerMenu";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(useGSAP);

function AnimatedBox() {
  return (
    <div className="container animated-box">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "69px",
          opacity: 0.3,
        }}
      >
        <Spline
          style={{ borderRadius: 69 }}
          scene="https://prod.spline.design/f5SzOc8sYqnK7F2W/scene.splinecode"
        />
      </div>
      <LogoContainer />
      <UpperCornerMenu />
      <ServicesAndSocial />
      <LowerCornerMenu />
    </div>
  );
}

export default AnimatedBox;

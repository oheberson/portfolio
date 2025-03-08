import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./AnimatedBox.css";
import LowerCornerMenu from "./LowerCornerMenu";
import LogoContainer from "./LogoContainer";
import ServicesAndSocial from "./ServicesAndSocial";
import UpperCornerMenu from "./UpperCornerMenu";

gsap.registerPlugin(useGSAP);

function AnimatedBox() {
  return (
    <div className="container animated-box">
      <LogoContainer />
      <UpperCornerMenu />
      <ServicesAndSocial />
      <LowerCornerMenu />
    </div>
  );
}

export default AnimatedBox;

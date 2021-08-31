import React from "react";
import AnimatedBg from "react-animated-bg";
import { backgroundSize } from "tailwindcss/defaultTheme";

const toggle = () => {
  const slides = [
    "url(" + require("assets/img/girla.png").default + ")",
    "url(" + require("assets/img/boya.png").default + ")",
    "url(" + require("assets/img/girlb.png").default + ")",
    "url(" + require("assets/img/boyb.png").default + ")",
    "url(" + require("assets/img/girlc.png").default + ")",
    "url(" + require("assets/img/boyc.png").default + ")",
    "url(" + require("assets/img/girld.png").default + ")",
    "url(" + require("assets/img/boyd.png").default + ")",
    "url(" + require("assets/img/girle.png").default + ")",
    "url(" + require("assets/img/boye.png").default + ")",
    "url(" + require("assets/img/girlf.png").default + ")",
    "url(" + require("assets/img/boyf.png").default + ")",
    "url(" + require("assets/img/girlg.png").default + ")",
    "url(" + require("assets/img/girlg.png").default + ")",
    "url(" + require("assets/img/boyh.png").default + ")",
    "url(" + require("assets/img/girlh.png").default + ")",
  ];
  return (
    <AnimatedBg
      colors={slides}
      duration={2}
      delay={1}
      timingFunction="ease-out"
      style={{
        minHeight: "500px",
        maxHeight: "600px",
        minWidth: "250px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="rounded"
    ></AnimatedBg>
  );
};

export default toggle;

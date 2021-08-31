import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import backImage from "../assets/img/register_bg_2.png";
import girla from "../assets/img/girla.png";
import boya from "../assets/img/boya.png";

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

export default function App() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  });
  useEffect(() => {
    const t = setInterval(
      () => set((state) => (state + 1) % slides.length),
      4000
    );
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="flex fill center shadow-xl rounded-full h-auto align-middle border-none">
      {transitions((style, i) => (
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "opacity",
            ...style,
            backgroundImage: slides[i],
            borderRadius: 50,
          }}
        />
      ))}
    </div>
  );
}

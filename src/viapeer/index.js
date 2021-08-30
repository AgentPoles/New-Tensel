import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/navbars/authnavbar.js";
import Footer from "components/footers/footer.js";
import TabA from "components/added/taba";
import BuyPage from "./buysection/buypage";
export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60)",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Exchange with Peer
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Buy and sell from people everywhere, even Aliens 😎, at the
                    best price rates and without any need for trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
        </div>
        <section>
          <TabA contentBuy={BuyPage} />
        </section>
      </main>
      <Footer />
    </>
  );
}

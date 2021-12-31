import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import backImage from "../assets/img/register_bg_2.png";
import girla from "../assets/img/girla.png";
import Footer from "components/footers/footeradmin";
import Navbar from "components/navbars/homenav";
import Mobiletoggle from "mobile/toggle";
import AnimatedBg from "react-animated-bg";

import Toggle from "./toogle";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <>
      {isDesktopOrLaptop && (
        <section className="bg-blueGray-600  py-20 md:py-0 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center align-center">
              <div className="w-full mt-64 md:w-5/12 px-12 md:px-4  md:mt-24">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-child h text-xl"></i>
                </div>
                <h1 className="text-4xl mb-2 font-semibold leading-normal text-white">
                  Use Tensel
                </h1>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Feel the power of social life, Artificial intelligence and,
                  <a href="" className="text-blueGray-300" target="_blank">
                    {" "}
                    Blockchain Technology
                  </a>{" "}
                  in an open source software that allows for trustless exchange
                  of digital assets
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                  welcome, get onboard!
                </p>
                <Link to="/ViaPeer">
                  <a className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg">
                    Peer to Peer (P2P){" "}
                  </a>
                </Link>
                <a
                  style={{ pointerEvents: "none" }}
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Transact Via Institution (Soon){" "}
                </a>
                <a
                  style={{ pointerEvents: "none" }}
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Transact with AI (Soon){" "}
                </a>
                <a
                  style={{ pointerEvents: "none" }}
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Trade with Contracts (Soon){" "}
                </a>
              </div>

              <div className="w-0/12 md:w-4/12 px-12 mt-8 relative">
                {/* <img
                src={girla}
                className="text-blueGray-700 absolute -top-10-px - left-auto opacity-80 text-55"
              ></img> */}
                <Toggle />
              </div>
            </div>
          </div>
        </section>
      )}
      {isMobile && (
        // <AnimatedBg
        //   colors={["#475569", "#64748B", "#94A3B8", "#CBD5E1"]}
        //   duration={1}
        //   timingFunction="ease-out"
        //   className="section-styles"
        // >
        <section className=" bg-blueGray-600 py-20 md:py-0 overflow-hidden">
          <div className="container overflow-x-hidden mx-auto">
            <Navbar transparent />
            <div className="flex flex-wrap justify-center align-center">
              <div className="w-full mt-64 md:w-5/12 px-12 md:px-4  md:mt-24">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-child h text-xl"> </i>
                </div>
                <h1 className="text-4xl mb-2 font-semibold leading-normal text-white">
                  Use Tensel
                </h1>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Feel the power of social life, Artificial intelligence and,
                  <a href="" className="text-blueGray-300" target="_blank">
                    {" "}
                    Blockchain Technology
                  </a>{" "}
                  in an open source software that allows for trustless exchange
                  of digital assets
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                  welcome, get onboard!
                </p>
              </div>
            </div>
          </div>
          <Mobiletoggle />
          <div className="flex flex-wrap">
            <div className="px-4 mr-auto">
              <Link to="/ViaPeer">
                <a
                  href=""
                  target="_blank"
                  className="github-star mt-4 inline-block text-white font-normal px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-1sm shadow hover:shadow-lg"
 style={{ pointerEvents: "none" }}
                >
                  Peer to Peer (P2P){" "}
                </a>
              </Link>

              <a
                className="github-star mt-4 inline-block text-white font-normal px-3 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                style={{ pointerEvents: "none" }}
              >
                Transact Via Institution (Soon){" "}
              </a>

              <a
                className="github-star mt-4 inline-block text-white font-normal px-3 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                style={{ pointerEvents: "none" }}
              >
                Transact with AI (Soon){" "}
              </a>
              <a
                className="github-star mt-4 inline-block text-white font-normal px-3 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                style={{ pointerEvents: "none" }}
              >
                Trade with Contracts (Soon){" "}
              </a>
            </div>
          </div>
        </section>
        // </AnimatedBg>
      )}
      <Footer />
    </>
  );
};

export default Home;

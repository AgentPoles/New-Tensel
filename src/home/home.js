import React from "react";
import { Link } from "react-router-dom";
import backImage from "../assets/img/register_bg_2.png";
import girla from "../assets/img/girla.png";

import Toggle from "./toogle";

const Home = () => {
  return (
    <>
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
                in an open source software that allows for trustless exchange of
                digital assets
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                welcome, get onboard!
              </p>
              <Link to="/ViaPeer">
                <a
                  href=""
                  target="_blank"
                  className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Transact with Person{" "}
                </a>
              </Link>
              <a
                href=""
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Transact Via Institution{" "}
              </a>
              <a
                href=""
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Transact with AI{" "}
              </a>
              <a
                href=""
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Trade with Contracts{" "}
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
    </>
  );
};

export default Home;

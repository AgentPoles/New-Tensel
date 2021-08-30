import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "components/added/modals";
// import OrderMail from "../components/Added/OrderMail";
// import tableDropDown from "../components/Dropdowns/TableDropdown";

// components

import TableDropdown from "components/dropdowns/tabledropdown.js";

export default function CardTable({ color, message, peerData }) {
  const [showModal, setShowModal] = useState(false);
  const [user_id, setUser_id] = useState(0);
  const [buy, setBuy] = useState(false);
  const [whattotrade, setWhattoTrade] = useState("");

  let SellersData = peerData || [];

  let handleBuy = (user_id, buy, availableUnit) => {};

  if (SellersData.length > 0) {
    return (
      <>
        <div className="mb-40">
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            user_id={user_id}
            buyorsell={buy}
            whattotrade={whattotrade}
          />
          {showModal || (
            <div
              className={
                "relative flex flex-col min-w-0 break-words w-fullrounded " +
                (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
              }
            >
              <div className="rounded-t mb-0 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3
                      className={
                        "font-semibold text-lg " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                      }
                    >
                      {message}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      >
                        Name
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      >
                        Available Amount
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      >
                        Rate
                      </th>
                      {/* <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Users
                </th> */}
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      >
                        Completion
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {SellersData.map((seller, index) => (
                      <tr>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                          <img
                            src={seller.img}
                            className="h-12 w-12 bg-white rounded-full border"
                            alt="..."
                          ></img>{" "}
                          <span
                            className={
                              "ml-3 font-bold " +
                              +(color === "light"
                                ? "text-blueGray-600"
                                : "text-white")
                            }
                          >
                            {seller.name}
                          </span>
                          {seller.verified && (
                            <span className="ml-3 mr-3 text-emerald-500">
                              <i className="fas fa-certificate"></i>
                            </span>
                          )}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {seller.availableAmount.toString() +
                            " " +
                            seller.availableUnit}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {seller.rate + " " + seller.rateUnit}
                        </td>
                        {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      <img
                        src={require("assets/img/team-1-800x800.jpg").default}
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                      ></img>
                      <img
                        src={require("assets/img/team-2-800x800.jpg").default}
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                      ></img>
                      <img
                        src={require("assets/img/team-3-800x800.jpg").default}
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                      ></img>
                      <img
                        src={require("assets/img/team-4-470x470.png").default}
                        alt="..."
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                      ></img>
                    </div>
                  </td> */}
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {seller.buy ? (
                            <div className="flex items-center">
                              <span className="mr-2">{seller.progress}</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                  <div
                                    style={{ width: seller.progress }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <span className="mr-2">{seller.progress}</span>
                              <div className="relative w-full">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                  <div
                                    style={{ width: seller.progress }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-ss whitespace-nowrap p-1 text-right">
                          {seller.buy ? (
                            <button
                              onClick={() => {
                                setUser_id(seller.user_id);

                                setBuy(seller.buy);
                                setWhattoTrade(seller.availableUnit);

                                setShowModal(true);
                              }}
                              className="github-star mt-1 inline-block text-white font-bold mr-3 px-2 py-2 rounded outline-none focus:outline-none bg-red-500 active:bg-red-600 uppercase text-sm shadow hover:shadow-lg"
                            >
                              Sell
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setUser_id(seller.user_id);

                                setBuy(seller.buy);
                                setWhattoTrade(seller.availableUnit);

                                setShowModal(true);
                              }}
                              className="github-star mt-1 inline-block text-white font-bold mr-3 px-2 py-2 rounded outline-none focus:outline-none bg-emerald-500 active:bg-emerald-500 uppercase text-sm shadow hover:shadow-lg"
                            >
                              Buy
                            </button>
                          )}
                        </td>
                        {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          <TableDropdown />
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-17">
          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i class="fas fa-folder-open"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            NO peer yet for this option
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            This order list is currently empty, please check out other tokens.
            Sorry for any inconvenience
          </p>
        </div>
      </>
    );
  }
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

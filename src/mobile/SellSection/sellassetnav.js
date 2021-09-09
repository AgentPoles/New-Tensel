import React from "react";
import PeerListDisplay from "../peerlistdisplay";

import BTCImagePath from "assets/img/bitcoin.png";
import ETHImagePath from "assets/img/ethereum.png";
import USDTImagePath from "assets/img/usdt.png";
import BUSDImagePath from "assets/img/busd.png";
import USEFULLImagePath from "assets/img/use.png";
import { conditionalExpression } from "@babel/types";
import BTCBuyers from "data/btc/buyersdata";
import BUSDBuyers from "data/busd/buyersdata";
import USDTBuyers from "data/usdt/buyersdata";
import ETHBuyers from "data/eth/buyersdata";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  let imageTest =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg";

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-0 shadow-lg rounded block leading-normal "
                  //   (openTab === 1
                  //     ? "text-white bg-lightBlue-600"
                  //     : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <SingleTabItem
                  imge={USDTImagePath}
                  color={"bg-emerald-500"}
                  name={"USDT"}
                />
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-0 shadow-lg rounded block leading-normal "
                  //   (openTab === 2
                  //     ? "text-white bg-lightBlue-600"
                  //     : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <SingleTabItem
                  imge={BUSDImagePath}
                  color={"bg-yellow-500"}
                  name={"BUSD"}
                />
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-0 shadow-lg rounded block leading-normal "
                  //   (openTab === 3
                  //     ? "text-white bg-lightBlue-600"
                  //     : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <SingleTabItem
                  imge={BTCImagePath}
                  color={"bg-orange-500"}
                  name={"BTC"}
                />
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-0 shadow-lg rounded block leading-normal "
                  //   (openTab === 3
                  //     ? "text-white bg-lightBlue-600"
                  //     : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <SingleTabItem
                  imge={ETHImagePath}
                  color={"bg-lightBlue-900"}
                  name={"ETH"}
                />
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-0 shadow-lg rounded block leading-normal "

                  //   (openTab === 3
                  //     ? "text-white bg-lightBlue-600"
                  //     : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <SingleTabItem
                  imge={USEFULLImagePath}
                  color={"bg-lightBlue-500"}
                  name={"USEFUL"}
                />
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-1 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <PeerListDisplay
                    message={"Peers you can sell to"}
                    peerData={USDTBuyers}
                  />
                  <small className="block ml-40 font-small leading-normal mt-0 mb-2 text-blueGray-400">
                    Scroll left or right
                  </small>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <PeerListDisplay
                    message={"Peers you can sell to"}
                    peerData={BUSDBuyers}
                  />
                  <small className="block ml-40 font-small leading-normal mt-0 mb-2 text-blueGray-400">
                    Scroll left or right
                  </small>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <PeerListDisplay
                    message={"Peers you can sell to"}
                    peerData={BTCBuyers}
                  />
                  <small className="block ml-40 font-small leading-normal mt-0 mb-2 text-blueGray-400">
                    Scroll left or right
                  </small>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                  <PeerListDisplay
                    message={"Peers you can sell to"}
                    peerData={ETHBuyers}
                  />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link3">
                  <PeerListDisplay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleTabItem = ({ imge, name, color }) => (
  <div className={color + " shadow-lg rounded-lg text-center p-2"}>
    <img
      alt="..."
      className="shadow-md rounded-full max-w-full w-8 mx-auto p-2 bg-white"
      src={imge}
    />

    {console.log(imge)}
    <p className="text-sm text-white mt-1 font-semibold">{name}</p>
  </div>
);
export default Tabs;

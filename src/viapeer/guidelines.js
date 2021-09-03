// import {
//   ChainId,
//   Token,
//   TokenAmount,
//   Pair,
//   Trade,
//   TradeType,
//   Route,
// } from "@uniswap/sdk";
/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import IndexNavbar from "components/navbars/indexnavbar";
import Footer from "components/footers/footer.js";
import UserData from "data/userdata";

export default function Guidelines() {
  const location = useLocation();
  let user = {};
  let { user_id } = (location && location.state) || {};
  if (typeof user_id === "undefined" || user_id === null) {
    user_id = {};
  } else {
    user = UserData.find((user) => user.user_id === user_id);
  }

  const [withUser, setWithUser] = useState(false);

  useEffect(() => {
    if (Object.entries(user).length === 0) {
      setWithUser(false);
    } else {
      setWithUser(true);
    }
  }, [user]);

  if (withUser) {
    return (
      <>
        <IndexNavbar fixed />

        <section className="mt-10 md:mt-10 px- 10 pb-40 relative bg-blueGray-100">
          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-20">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 1 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  First things first
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We already sent a mail to {user.user_name}, with you in copy.
                  Before making any exchange or payments, {user.user_name} is to
                  reply <b>"confirm"</b> to the mail with you and tensel in
                  copy. This will help us know that he/she has agreed to
                  transact with you. If no reply (no mail) after 2 mins you can
                  proceed to contact him or her. <br />
                  <b>NOTE:</b> "tensel.usefull@gmail.com" must be in copy in the
                  received mail, hence it is not valid.{" "}
                  <a
                    href="https://www.phrasemix.com/phrases/copy-someone-on-an-email-message"
                    target="_blank"
                    className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  >
                    see here
                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                  </a>
                  what it means to be in copy in a mail.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-20">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 2 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Contacting Peer
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  If you got a response mail from the email address (shown in{" "}
                  {user.user_name}'s profile page')
                  {user.User_name} with tensel.usefull@gmail.com in copy ,
                  Contact {user.User_name} and let him/her know you are
                  immediately ready for the trade. If you didnt get a response
                  mail after 2mins, contact {user.user_name}
                  and ensure that he/she sends the reponse mail before any
                  exchange starts
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-10">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 3 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Exchange
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  You are to start the exchange. This means you are to make
                  payment first when you want to buy or send asset first when
                  you want to sell. Once you do this, notify the peer and wait
                  for his/her exchange <br />
                  <b>kindly know that </b> {user.username} already provided a
                  <b> collateral</b> to Tensel, so you are covered.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-10">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 4 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  After the Exchange
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  After the exchange, if everything run's smoothly, you are to
                  reply to the mail {user.user_name} sent to you, the word
                  "satisfied". If there is any challenge no panics, try to
                  resolve it amicably cause it could be due to some constraints,
                  if not, then Contact Tensel.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <IndexNavbar fixed />

        <section className="mt-10 md:mt-10 px- 10 pb-40 relative bg-blueGray-100">
          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-20">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 1 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  First things first
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Immediately you initiate a buy or sell, before accessing the
                  buyer's or seller's profile, you are required to provide some
                  information. Based on this information, a mail is sent to the
                  peer (buyer or seller), with you in copy. Before making any
                  exchange or payments, Your peer (buyer or seller) is to reply{" "}
                  <b>"confirm"</b> to the mail with you and tensel in copy. This
                  will help us know that he/she has agreed to transact with you.
                  If no reply (no mail) after 2 mins you can proceed to contact
                  him or her <br />
                  <b>NOTE:</b> "tensel.usefull@gmail.com" must be in copy in the
                  received mail, else it is not valid.{" "}
                  <a
                    href="https://www.phrasemix.com/phrases/copy-someone-on-an-email-message"
                    target="_blank"
                    className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  >
                    {" "}
                    see here
                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                  </a>
                  what it means to be in copy in a mail.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-20">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 2 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Contacting Peer
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  If you got a response mail from the email address (shown in{" "}
                  peer's profile page') with tensel.usefull@gmail.com in copy ,
                  Contact peer (buyer or seller) and let him/her know you are
                  immediately ready for the trade. If you didnt get a response
                  mail after 2mins as stated in step one, also contact peer, and
                  ensure that he/she sends the reponse mail before any exchange
                  starts
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-10">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 3 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Exchange
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  You are to start the exchange. This means you are to make
                  payment first when you want to buy or send asset first when
                  you want to sell. Once you do this, notify the peer by call or
                  chat and wait for his/her exchange <br />
                  <b>kindly know that </b> your peer already provided a
                  <b> collateral</b> to Tensel, so you are covered.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-10">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <h1 text-xl> 4 </h1>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  After the Exchange
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  After the exchange, if everything run's smoothly, you are to
                  reply to the mail your peer sent to you earlier, with the word
                  "satisfied". If there is any challenge, no panics, try to
                  resolve it amicably cause it could be due to some constraints.
                  if not, then Contact Tensel.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

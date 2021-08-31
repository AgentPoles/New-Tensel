import { right } from "@popperjs/core";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserData from "../../data/userdata";
import { useAlert } from "react-alert";

const OrderMail = ({ showModal, setShowModal, user_id, whattotrade, buy }) => {
  const history = useHistory();
  const Alert = useAlert();
  let user = UserData.find((user) => user.user_id === user_id);
  let requested = "";
  if (buy) {
    requested = "wants to buy " + whattotrade + " from you";
  } else {
    requested = "wants to sell " + whattotrade + " to you";
  }

  const [userData, setUserData] = useState({
    user_email: "",
    user_wallet_address: "",
    user_current_balance: "",
    peer_email: "",
    message: "",
    requested_service: "",
    requested_amount: "",
  });
  let handleCancel = () => {
    setShowModal(false);
  };

  let handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      peer_email: user.user_email,
      requested_service: requested,
    });
  };
  let handleSubmite = () => {
    console.log("handling submit");
    emailjs
      .send(
        "service_04msqui",
        "Trade_ID",
        userData,
        "user_Qi06GFI32mGu84Vc1pZE7"
      )
      .then(
        (result) => {
          handleCancel();
          Alert.show(
            "gracias! you will now be directed to peers profile, please check your email for the *necessary* guidelines"
          );
          history.push({
            pathname: "/shortprofile",
            state: { user_id: user_id },
          });
        },
        (error) => {
          console.log(error);
          Alert.show(
            "Tensel couldn't receive your mail, something went wrong: " + error
          );
        }
      );
  };
  return (
    <section className="w-full h-full pt-20 py-40 mb-40 min-h-screen">
      <div
        className="top-0 w-full h-full bg-blueGray-00 bg-no-repeat bg-full rounded"
        style={{
          backgroundImage:
            "url(" + require("assets/img/register_bg_2.png").default + ")",
        }}
      >
        <section className="mb-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center ">
              <div className="w-full lg:w-6/12 px-4">
                <div className=" flex flex-col min-w-0 break-words w-full mb-6  mt-10 shadow-lg rounded-lg bg-blueGray-200">
                  <div
                    className="flex-auto p-5 lg:p-10"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h4 className="text-2xl font-semibold">
                      Please provide the following details accurately
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      We are watching, you are safe!
                    </p>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="email"
                        name="user_email"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="wallet_address"
                      >
                        Wallet Address
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="wallet Address"
                        name="user_wallet_address"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="relative w-full mb-3 mt-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="wallet_address"
                      >
                        Amount
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Amount you want to buy or sell"
                        name="requested_amount"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="relative w-full mb-3 mt-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="Amount Currently in Wallet"
                      >
                        Current Wallet Balance
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="current balance"
                        name="user_current_balance"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div style={{ marginLeft: "auto", marginBottom: "1rem" }}>
                      not sure of balance?{" "}
                      <a
                        className="text-lightBlue-600"
                        style={{ pointerEvents: "none" }}
                      >
                        {" "}
                        use turnnel
                      </a>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Any other Message (Optional)
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        name="message"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-100 text-blueGray-800 mb-10 active:bg-blueGray-200 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleCancel()}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-blueGray-600 text-white active:bg-blueGray-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => handleSubmite()}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OrderMail;

// import { right } from "@popperjs/core";
import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserData from "../../data/userdata";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import uniqid from "uniqid";

const OrderMail = ({ showModal, setShowModal, user_id, whattotrade, buy }) => {
  const history = useHistory();
  // console.log(uniqid("tensel-"));
  const SignupSchema = Yup.object().shape({
    user_wallet_address: Yup.string()
      .min(25, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    user_current_balance: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    requested_amount: Yup.string()
      .min(1, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    user_email: Yup.string().email("Invalid email").required("Required"),
  });

  let user = UserData.find((user) => user.user_id === user_id);

  let requested = "";
  if (buy) {
    requested = "wants to buy " + whattotrade + " from you";
  } else {
    requested = "wants to sell " + whattotrade + " to you";
  }
  const [sentMail, setSentMail] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({
    user_email: "",
    user_wallet_address: "",
    transaction_id: uniqid("tensel-"),
    peer_email: "",
    peer_name: "",
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
      peer_name: user.user_name,
      requested_service: requested,
    });
    console.log(userData.peer_name);
  };

  let handleGotIt = (user_id) => {
    history.push({
      pathname: "/shortprofile",
      state: { user_id: user_id },
    });
  };

  let handleGuidelines = (user_id) => {
    history.push({
      pathname: "/guidelines",
      state: { user_id: user_id },
    });
  };

  let handleSubmite = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // setUserData({ ...userData, transaction_id: uniqid("tensel-") });

    console.log(userData.transaction_id);

    emailjs
      .send(
        "service_04msqui",
        "Trade_ID",
        userData,
        "user_Qi06GFI32mGu84Vc1pZE7"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setSentMail(true);
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
          alert(
            "Tensel couldn't receive your mail, something went wrong: " + error
          );
        }
      );
  };
  return (
    <section className="w-full pt-20 py-4 mb-5 min-h-screen">
      <div
        className="top-0 w-full bg-blueGray-00 bg-no-repeat bg-full rounded"
        style={{
          backgroundImage:
            "url(" + require("assets/img/register_bg_2.png").default + ")",
        }}
      >
        {!sentMail || (
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg px-12 relative z-10">
              <div className="w-full text-center lg:w-8/12">
                <p className="text-4xl text-center">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p>
                <h3 className="font-semibold text-3xl">
                  Yes! we have received a record of your request
                </h3>
                <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                  You will now be directed to {user.user_name}'s profile.
                  Please, before contacting him/her, read the <b>necessary</b>{" "}
                  guidelines or continue if you're already familiar with the
                  process
                </p>
                <div className="sm:block flex flex-col mt-10">
                  <Link to="/guidelines" target="_blank">
                    <button className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                      See Guidelines
                    </button>
                  </Link>
                  <button
                    onClick={() => handleGotIt(user_id)}
                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    <i class="far fa-thumbs-up text-lg mr-1"></i>
                    <span>Continue</span>
                  </button>
                </div>
                <div className="text-center mt-16"></div>
              </div>
            </div>
          </div>
        )}
        {sentMail || (
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
                      <Formik
                        initialValues={{
                          user_email: "",
                          user_wallet_address: "",
                          user_current_balance: "",

                          requested_amount: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(e) => {
                          // same shape as initial values
                          handleSubmite(e);
                        }}
                      >
                        {({ errors, touched }) => (
                          <form onSubmit={(e) => handleSubmite(e)}>
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
                                required={true}
                              />
                              {errors.user_email && touched.user_email ? (
                                <div>{errors.user_email}</div>
                              ) : null}
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
                                placeholder="*correct* wallet Address"
                                name="user_wallet_address"
                                onChange={(e) => handleChange(e)}
                                required={true}
                              />
                              {errors.user_wallet_address &&
                              touched.user_wallet_address ? (
                                <div>{errors.user_wallet_address}</div>
                              ) : null}
                            </div>
                            <div className="relative w-full mb-3 mt-2">
                              <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="Amen"
                              >
                                Amount
                              </label>
                              <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Amount you want to buy or sell"
                                name="requested_amount"
                                onChange={(e) => handleChange(e)}
                                required={true}
                              />
                              {errors.requested_amount &&
                              touched.requested_amount ? (
                                <div>{errors.requested_amount}</div>
                              ) : null}
                            </div>

                            {/* <div className="relative w-full mb-3 mt-2">
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
                                required={true}
                              />
                              {errors.user_current_balance &&
                              touched.user_current_balance ? (
                                <div>{errors.user_current_balance}</div>
                              ) : null}
                            </div> */}
                            {/* <div
                              style={{
                                marginLeft: "auto",
                                marginBottom: "1rem",
                              }}
                            >
                              not sure of balance?{" "}
                              <a
                                className="text-lightBlue-600"
                                style={{ pointerEvents: "none" }}
                              >
                                {" "}
                                use turnnel
                              </a>
                            </div> */}
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
                              {isLoading && <i class="fas fa-cog fa-spin"></i>}
                              <button
                                className="bg-blueGray-100 text-blueGray-800 mb-10 active:bg-blueGray-200 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleCancel()}
                              >
                                Cancel
                              </button>
                              <button
                                className="bg-blueGray-600 text-white active:bg-blueGray-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                // onClick={(e) => handleSubmite(e)}
                              >
                                Send Message
                              </button>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default OrderMail;

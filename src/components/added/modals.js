import React from "react";
import OrderMail from "./ordermail";

export default function Modal({
  showModal,
  setShowModal,
  user_id,
  buy,
  whattotrade,
}) {
  return (
    <>
      {showModal ? (
        <>
          <OrderMail
            setShowModal={setShowModal}
            user_id={user_id}
            buy={buy}
            whattotrade={whattotrade}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

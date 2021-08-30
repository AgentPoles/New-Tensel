import React from "react";
import PeerDisplayItem from "./peerdisplayitem";

// components

// import CardTable from "components/Cards/CardTable.js";

export default function PeerList({ message, peerData }) {
  return (
    <>
      <div className="mt-2">
        <div className="w-full mb-4">
          <PeerDisplayItem message={message} peerData={peerData} />
        </div>
      </div>
    </>
  );
}

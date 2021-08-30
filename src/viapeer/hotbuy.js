import React from "react";

// @notus-pro/react
import Teams6 from "@notus-pro/react/Teams6";
import BackG from "../assets/img/register_bg_2.png";
import firstImage from "../assets/img/paule.jpg";
import SecondImage from "../assets/img/Kabura.jpeg";
import thirdImage from "../assets/img/tbnsn.PNG";

const props = {
  heading3: {
    color: "emerald",
    subtitle: "Specially for you",
    title: "🔥🔥🔥 Hot OFFERS",
    description: "",

    alignment: "center",
  },
  cards: [
    {
      cardprofileactions: {
        headImage: BackG,
        image: firstImage,
        leftButton: { children: "BUY", color: "dark", size: "sm" },
        rightButton: { children: "Profile", color: "dark", size: "sm" },
        stats: [
          { title: "0", subtitle: "Sold" },
          { title: "517", subtitle: "Rate" },
          { title: "10", subtitle: "USDT" },
        ],
        title: "OAMEN PAUL",
        description: "USDT",
      },
    },
    {
      cardprofilereviews: {
        headImage: BackG,
        image: SecondImage,
        button: { children: "BUY", color: "emerald", fullWidth: true },
        stats: [
          { title: "520", subtitle: "Rate" },
          { title: "BUSD", subtitle: "" },
        ],
        title: "Kabura Coperative",
        description: "BUSD",
      },
    },
    {
      cardprofileactions: {
        headImage: BackG,
        image: thirdImage,
        leftButton: { children: "BUY", color: "dark", size: "sm" },
        rightButton: { children: "View Profile", color: "dark", size: "sm" },
        stats: [
          { title: "0", subtitle: "Sold" },
          { title: "521.5", subtitle: "Rate" },
          { title: "1000 ", subtitle: "A" },
        ],
        title: "The Bull Squad",
        description: "USDT",
      },
    },
  ],
};

export default function Example() {
  return (
    <>
      <Teams6 {...props} />
    </>
  );
}

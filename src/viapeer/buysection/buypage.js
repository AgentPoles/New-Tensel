import React from "react";
import { useMediaQuery } from "react-responsive";

// import Hot from "../hotBuy";
import AssetNava from "../assetnav";
import AssetNavb from "../../mobile/BuySection/buyassetnav";

const BuyPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 800px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div>
      {isDesktopOrLaptop && <AssetNava />}
      {isMobile && <AssetNavb />}
    </div>
  );
};

export default BuyPage;

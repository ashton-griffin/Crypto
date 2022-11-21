import React from "react";
import Trending from "../components/Trending";
import Markets from "../components/Markets";
//import Search from "../components/Search";
const CryptoHome = () => {
  return (
    <div className="dark:bg-gray-800">
      {/* <Search /> */}
      {/* <Trending /> */}
      <Markets />
    </div>
  );
};

export default CryptoHome;

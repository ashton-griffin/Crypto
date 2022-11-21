import React from "react";
import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";
const Trending = () => {
  const { response } = useAxios('search/trending');
  console.log(response);
  return (
    <div className="mt-8 bg-slate-800">
      <h1 className="text-2xl mb-2 text-slate-500 ml-5">Trending</h1>
      {response && response.coins.map(coin => <CoinTrending key={coin.item.coin_id} coin={coin.item} />)}
    </div>
  );
};

export default Trending;

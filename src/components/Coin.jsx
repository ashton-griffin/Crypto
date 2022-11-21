import React from "react";
import { currencyFormat } from "../utils";
import { TrendingDown } from "../icons/icons";
import { TrendingUp } from "../icons/icons";
import { Link } from "react-router-dom";
const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-500 border-b hover:bg-gray-600 text-slate-500">
        <div className="flex items-center gap-1 ml-5">
          <img className="w-6" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span>({coin.symbol})</span>
        </div>
        <span className="w-full">{currencyFormat(coin.current_price)}</span>
        <span
          className={`flex gap-1 ${
            coin.price_change_percentage_24h < 0
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
        <div>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Coin;

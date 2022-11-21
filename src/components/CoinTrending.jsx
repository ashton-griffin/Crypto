import React from 'react'
import { Link } from 'react-router-dom';
const CoinTrending = ({ coin }) => {
  console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className='grid grid-cols-3 font-light mb-2 p-2 border-gray-500 border-b rounded hover:bg-gray-600 text-slate-500'>
      <div className='flex items-center gap-1 ml-5'>
        <span className='font-semibold mr-3'>{coin.score+1}</span>
        <img className='w-6 mr-3'src={coin.small} alt={coin.name} />
        <p>{coin.name}</p>
        <small className='text-xs'>({coin.symbol})</small>
      </div>
    </div>
    </Link>
  )
}

export default CoinTrending

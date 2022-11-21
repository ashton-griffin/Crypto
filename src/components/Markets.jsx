import React from 'react'
import useAxios from '../hooks/useAxios'
import Coin from './Coin'
const Markets = () => {

  const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false')
  console.log(response);
  return (
    <section className='dark:bg-slate-800'>
      <h1 className='text-2xl mb-2 text-slate-500 ml-5'>Cryptocurrency's</h1>
      {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  )
}

export default Markets

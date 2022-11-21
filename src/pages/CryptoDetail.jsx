import React from 'react'
import HistoryChart from '../components/HistoryChart';
import CoinDetail from '../components/CoinDetail';

const CryptoDetail = () => {
  return (
    <div className='bg-slate-800'>
      <HistoryChart />
      <CoinDetail />
    </div>
  )
}

export default CryptoDetail

import React from 'react'
import useAxios from "../hooks/useAxios";
import { useParams } from 'react-router-dom';


const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(`coins/${id}?tickers=false&market_data=false&community_data=false&sparkline=false`)
  console.log(response);


  if(!response) {
    return <div>Loading...</div>
  }
  return (
    <div className='my-6'>
      <div className='flex-col gap-4 items-center'>
        <img className='ml-6'src={response.image.small} alt={response.name} />
        <h1 className='text-2xl text-gray-500 mb-2 ml-5 capitalize font-bold'>{response.name}</h1>
        <p className='mt-6 text-gray-500' dangerouslySetInnerHTML={{ __html: response.description.en }}></p>
      </div>
    </div>
  )
}

export default CoinDetail

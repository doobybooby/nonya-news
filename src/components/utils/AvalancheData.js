import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const AvalancheData = () => {
  const [ avaxData, setAvaxData ] = useState()

  const fetchAvaxPrice = async()=> {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/avalanche-2')
    console.log('---avax---', response.data)
    setAvaxData(response.data)
  }
  useEffect(()=>{
    fetchAvaxPrice()
  }, [])
  return (
    <div>
      { avaxData &&
          <div>
            <p>24H: {(avaxData.market_data.price_change_percentage_24h).toFixed(2)}</p>
            <p>{(avaxData.symbol).toUpperCase()}: ${avaxData.market_data.current_price.usd}</p>
          </div>   
      }
    </div>
  )
}

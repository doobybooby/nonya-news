import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AvaxLogo from '../../images/avaxLogo.png'

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
            <img src={AvaxLogo} width='30%' alt="" />
            <p></p>
            {/* <p>${avaxData.market_data.current_price.usd}/24H: {(avaxData.market_data.price_change_percentage_24h).toFixed(2)}%</p> */}
            <p>${avaxData.market_data.current_price.usd}</p>
          </div>   
      }
    </div>
  )
}

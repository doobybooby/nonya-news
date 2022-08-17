import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const InfoBanner = () => {
  const [ date, setDate ] = useState('')
  const [ weatherCoordinates, setWeatherCoordinates ] = useState([])
  const [ weather, setWeather ] = useState([])
  
  const fetchDate = ()=> {
    const date = new Date()
    console.log(  )
    const displayDate = {
      month: date.getMonth()+1,
      date: date.getDate(),
      hour: date.getHours(),
      min: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }
    return `${displayDate.month}/${displayDate.date} ${displayDate.hour}:${displayDate.min}`
  }

  useEffect(()=> {
    const interval = setInterval(()=> {
      setDate(fetchDate())
    }, 1000)

    return ()=> clearInterval(interval)
  }, [date])


  useEffect(()=> {
    const setCoordinates = async()=> {
      await fetchWeatherCoordinates()
    }
    setCoordinates()
  }, [])
  
  useEffect(()=> {
    const setWeather = async()=> {
      await fetchWeather()
    }
    setWeather()
  }, [weatherCoordinates])

    
  const fetchWeatherCoordinates = async()=> {
    const response = await axios.get(
      'http://api.openweathermap.org/geo/1.0/direct', { 
        params: {
          'appid': process.env.REACT_APP_API_KEY_OPENWEATHER,
          'q': 'New York'
        }    
      }
    )
    setWeatherCoordinates([response.data[0].lat, response.data[0].lon])
  }

  const fetchWeather = async()=> {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/onecall', {
        params: {
          'appid': process.env.REACT_APP_API_KEY_OPENWEATHER,
          'lat' : weatherCoordinates[0],
          'lon' : weatherCoordinates[1],
          'units': 'imperial'
        }
      }
    )
    setWeather(response.data)
  }

  return (
    <div className='flex-row info-banner'>
      <p>{ date }</p>
      <p>{ weather.current &&  weather.current.temp }°F</p>
      <p>{ weather.current &&  weather.current.weather[0].main }</p>
    </div>
  )
}

import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SunIcon from '../images/icons/icons8-sun.svg'

export const InfoBanner = () => {
  const [ date, setDate ] = useState('')
  const [ weatherCoordinates, setWeatherCoordinates ] = useState([])
  const [ weather, setWeather ] = useState([])
  
  const fetchDate = ()=> {
    const date = new Date()
    const displayDate = {
      month: date.toLocaleString('default', {month: 'long'}),
      date: date.getDate(),
      hour: date.getHours(),
      min: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    }
    return displayDate
    // return `${displayDate.month}/${displayDate.date} ${displayDate.hour}:${displayDate.min}`
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
    <div className='flex-infobanner'>
      <div className='nav-time'>
        <div className='nav-time-date'>
          <h3>{ date.month } { date.date }</h3>
          <h3> {date.hour}:{date.min} </h3>
        </div>
        <div>
          <div className='nav-time-date nav-weather'>
            <img src={SunIcon} width='40%'/>
            <h3>{ weather.current &&  weather.current.temp }°F </h3>
          </div>
          <h3>New York</h3>
        </div>
      </div>
    </div>
  )
}

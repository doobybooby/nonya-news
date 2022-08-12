import axios from 'axios'
import React, { useState } from 'react'


export const Home = () => {
  const [collectiveNews, setCollectiveNews] = useState({})

  const headerConfig = {
    nytimesAPI: process.env.REACT_APP_API_KEY_NYTIMES,
  }
  
  const urls = {
    nytimesURL: 'https://api.nytimes.com/svc/topstories/v2/home.json'
  }

  console.log(headerConfig, urls)

  const fetchNYTimes = async()=> {
    const response = await axios.get(urls.nytimesURL, { 
      params: {
        'api-key': process.env.REACT_APP_API_KEY_NYTIMES
      }
    })
    setCollectiveNews(prevState => { return {...prevState, nyTimes:response.data.results}})
  }
  console.log(collectiveNews)

  return (
    <div>
      Home
      <button onClick={fetchNYTimes}>NY-TIMSE</button>
      <ul>
        {
          (collectiveNews.nyTimes || []).map( news => {
            return (
              <li>
                {news.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

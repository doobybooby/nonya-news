import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'


export const Home = () => {
  const [collectiveNews, setCollectiveNews] = useState({})
  
  const urls = {
    nytimes: 'https://api.nytimes.com/svc/topstories/v2/home.json',
    guardian: 'https://content.guardianapis.com/search?page=1',
    mediastack: 'http://api.mediastack.com/v1/news'
  }
  
  const fetchMediastack = async()=> {
    const response = await axios.get(urls.mediastack, { 
      params: {
        'access_key': process.env.REACT_APP_API_KEY_MEDIASTACK,
        'languages': 'en'
      }    
    })
    setCollectiveNews(prevState => { return {...prevState, mediastack:response.data.data}})
  }

  const fetchGuardian = async()=> {
    const response = await axios.get(urls.guardian, { 
      params: {
        'api-key': process.env.REACT_APP_API_KEY_GUARDIAN
      }
      
    })
    setCollectiveNews(prevState => { return {...prevState, guardian:response.data.response.results}})
  }

  const fetchNYTimes = async()=> {
    const response = await axios.get(urls.nytimes, { 
      params: {
        'api-key': process.env.REACT_APP_API_KEY_NYTIMES
      }
    })
    setCollectiveNews(prevState => { return {...prevState, nyTimes:response.data.results}})
  }

  useEffect(()=> {
    const initialFetch = async()=> {
      await Promise.all([
        await fetchNYTimes(),
        await fetchGuardian(),
        await fetchMediastack()
      ])
    }
    initialFetch()
  }, [])

  return (
    <div>
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
        {
          (collectiveNews.guardian || []).map( news => {
            return (
              <li>
                {news.webTitle}
              </li>
            )
          })
        }
        {
          (collectiveNews.mediastack || []).map( news => {
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

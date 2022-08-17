import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import NYTLogo from '../../images/NewYorkTimes.svg.png'
import GuardianLogo from '../../images/TheGuardianLogo.jpeg'
// collapsed news 
// {
//   title:''
//   imgLocation:''
//   description: ''
//   url: ''
//   author: ''
//   publihser: ''
//   publishedAt: ''
//   category: ['','']
// }


export const Home = () => {
  const [newsDatabase, setNewsDatabase ] = useState([])
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
    const fetchAllNews = async()=> {
      await Promise.all([
        await fetchNYTimes(),
        await fetchGuardian(),
        await fetchMediastack()
      ])
    }
    fetchAllNews()
  }, [])

  useEffect(()=> {
    mergeNews()
  }, [collectiveNews])

  const mergeNews = async()=> {
    for ( const newsPublisher in collectiveNews){
      if( newsPublisher === 'nyTimes'){
        collectiveNews[newsPublisher].map( singleNews => {
          const inLine = {
            title: singleNews.title,
            imgLocation: singleNews.multimedia[0].url,
            description: singleNews.abstract,
            url: singleNews.url,
            author: singleNews.byline,
            publisher: newsPublisher,
            publishedAt: singleNews.created_date,
            category: singleNews.subsection,
            logoUrl: NYTLogo
          }
          if(!newsDatabase.find( news => news.url === inLine.url))
            setNewsDatabase(prevState => [...prevState, inLine])
        })
      }
      if( newsPublisher === 'guardian'){
        collectiveNews[newsPublisher].map( (singleNews, idx) => {
          const inLine = {
            title: singleNews.webTitle,
            imgLocation: `https://source.unsplash.com/random?img=${idx}`,
            description: '',
            url: singleNews.webUrl,
            author: '',
            publisher: newsPublisher,
            publishedAt: singleNews.webPublicationDate,
            category: singleNews.sectionName,
            logoUrl: GuardianLogo
          }
          if(!newsDatabase.find( news => news.url === inLine.url))
            setNewsDatabase(prevState => [...prevState, inLine])
        })
      }
      if( newsPublisher === 'mediastack'){
        collectiveNews[newsPublisher].map( singleNews => {
          const inLine = {
            title: singleNews.title,
            imgLocation: singleNews.image,
            description: singleNews.description,
            url: singleNews.webUrl,
            author: singleNews.author,
            publisher: newsPublisher,
            publishedAt: singleNews.published_at,
            category: singleNews.category
          }
          console.log(singleNews)
          if(!newsDatabase.find( news => news.url === inLine.url))
            setNewsDatabase(prevState => [...prevState, inLine])
        })
      }
    }
  }
  return (
    <div>
      <ul className='news-list flex-col'>
        {
          newsDatabase.map(news => (
            <li key={news.url} className={`news-card ${news.publisher}`}>
              <img src={news.logoUrl} alt=""  width='100%' className='news-logo'/>
              <h1 className='t2rem'>{ news.title }</h1>
              <img src={news.imgLocation} alt="img" width='100%' />
              <h3 className='abstract'>{ news.description }</h3>
              <a href={news.url}>...Read more</a>
              <p className='byline'>{ news.author }</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

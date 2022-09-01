import axios from 'axios'
import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import NYTLogo from '../../images/NewYorkTimes.svg.png'
import GuardianLogo from '../../images/TheGuardianLogo.jpeg'
import CnnLogo from '../../images/cnnLogo.png'
import YoutubeLogo from '../../images/youtubeLogo.png'
import WashingtonsPostLogo from '../../images/washingtonsPostLogo.png'
import CnbcLogo from '../../images/cnbcLogo.png'
import UsaTodayLogo from '../../images/usaTodayLogo.png'
import BuzzfeedLogo from '../../images/buzzfeedLogo.jpeg'
import NbcSportsLogo from '../../images/nbcSportsLogo.png'
import Motor1Logo from '../../images/motor1Logo.png'
import AbcLogo from '../../images/abcLogo.png'
import FoxLogo from '../../images/foxLogo.jpeg'
import NYPostLogo from '../../images/newYorkPostLogo.png'
import CbsSportsLogo from '../../images/cbsSportsLogo.png'
import NflLogo from '../../images/nflLogo.png'
import wccfTech from '../../images/wccftech.png'
import GoogleNewsLogo from '../../images/googleNewsLogo.png'
import NonyaNewsLogo from '../../images/nonyaNewsLogo.png'
import BBCLogo from '../../images/BBCLogo.png'
import ReuterLogo from '../../images/reuterLogo.png'
import PoliticoLogo from '../../images/politicoLogo.png'
import TmzLogo from '../../images/tmzLogo.png'
import { Banner } from '../utils/Banner'
import LogoContainer from '../utils/LogoContainer'
import { InfoBanner } from '../utils/InfoBanner'
import { VideoPlayer } from '../utils/VideoPlayer'

export const Home = () => {
  const [newsDatabase, setNewsDatabase ] = useState([])
  const [collectiveNews, setCollectiveNews] = useState({})

  const urls = {
    nytimes: 'https://api.nytimes.com/svc/topstories/v2/home.json',
    guardian: 'https://content.guardianapis.com/search?page=1',
    mediastack: 'http://api.mediastack.com/v1/news',
    newsApi: 'https://newsapi.org/v2/top-headlines',
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
  
  const fetchNewsApi = async()=> {
    const response = await axios.get(urls.newsApi, { 
      params: {
        'apiKey': process.env.REACT_APP_API_KEY_NEWSAPI,
        'country': 'us'
      }
    })
    setCollectiveNews(prevState => { return {...prevState, newsApi:response.data.articles}})
  }

  useEffect(()=> {
    const fetchAllNews = async()=> {
      await Promise.all([
        // await fetchNYTimes(),
        // await fetchGuardian(),
        // await fetchMediastack(),
        await fetchNewsApi()
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
          if(!newsDatabase.find( news => news.url === inLine.url))
            setNewsDatabase(prevState => [...prevState, inLine])
        })
      }
      if( newsPublisher === 'newsApi'){
        collectiveNews[newsPublisher].map( singleNews => {
          const findLogo = (publisher)=> {
            if(publisher === 'the guardian' || publisher === 'guardian') return GuardianLogo
            else if (publisher === 'cnn') return CnnLogo
            else if ( publisher === 'youtube' ) return YoutubeLogo
            else if ( publisher === 'new york times' ) return NYTLogo
            else if ( publisher === 'the washington post' ) return WashingtonsPostLogo
            else if ( publisher === 'cnbc' ) return CnbcLogo
            // else if ( publisher === 'newyorktimes' ) return NYTLogo
            else if ( publisher === 'usa today' ) return UsaTodayLogo
            else if ( publisher === 'buzzfeed' ) return BuzzfeedLogo
            else if ( publisher === 'nbcsports.com' ) return NbcSportsLogo
            else if ( publisher === 'abc news' ) return AbcLogo
            else if ( publisher === 'fox business' ) return FoxLogo
            else if ( publisher === 'new york post' ) return NYPostLogo
            else if ( publisher === 'cbs sports' ) return CbsSportsLogo
            else if ( publisher === 'nfl news' ) return NflLogo
            else if ( publisher === 'wccftech' ) return wccfTech
            else if ( publisher === 'google news' ) return GoogleNewsLogo
            else if ( publisher === 'bbc news' ) return BBCLogo
            else if ( publisher === 'reuters' ) return ReuterLogo
            else if ( publisher === 'politico' ) return PoliticoLogo
            else if ( publisher === 'tmz' ) return TmzLogo
            else return NonyaNewsLogo
            
          }
          // console.log(singleNews)
          const inLine = {
            title: singleNews.title,
            imgLocation: singleNews.urlToImage,
            description: singleNews.description,
            url: singleNews.url,
            author: singleNews.author,
            publisher: ((singleNews.source.name).toLowerCase()),
            publishedAt: singleNews.publishedAt,
            category: '',
            logoUrl: findLogo((singleNews.source.name).toLowerCase())
          }
          if(!newsDatabase.find( news => news.url === inLine.url))
            setNewsDatabase(prevState => [...prevState, inLine])
        })
      }
    }
  }

  const ref = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>
            <VideoPlayer />

      {/* <button onClick={handleClick}>X</button> */}
      {/* <Banner props={ref} handleClick/> */}
      <div className='banner'>
        <InfoBanner/>
        <div className='banner-hero-text'>
          {/* <h1>5-Min Scroll</h1> */}
          <button 
            className='banner-hero-button'
            onClick={handleClick}
          >
            <div>| Read Reliable News |</div>
          </button>
          <div onClick={handleClick} className="arrow">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <p>| Read Reliable News |</p> */}
        </div>
      </div>
      <ul ref={ref} id='first-news' className='news-list flex-col'>
        {
          newsDatabase.map(news => (
            <li key={news.url} className={`news-card ${news.publisher}`}>
              {/* <p>{news.publisher}</p> */}
              <div className='news-content'>
              <div className='news-header'>
                <img src={news.logoUrl} alt=""  width='30%' className='news-logo'/>
                <h1>{ news.title }</h1>
              </div>
                <img src={news.imgLocation} alt="img" width='100%' />
                <h3 className='abstract'>{ news.description }</h3>
                <a href={news.url}>...Read more</a>
                <p className='byline'>{ news.author }</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

import React, { useEffect } from 'react'
import styled from 'styled-components'
import FeedHeader from './FeedHeader'
import FeedMain from './FeedMain'
import axios from 'axios'
  const Container = styled.div`
  `;

interface ComponentProps {
  
}
   

const Feed: React.FunctionComponent<ComponentProps> = () => {


  const [newsApiData, setNewsApiData] = React.useState()



  useEffect(() => {


    const fetchNewsData = async () => {
      const response = await axios.get(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/spy`, {
        headers: {
          'X-RapidAPI-Key': '99c7685635msh8ab852673ebd9c8p11222bjsnf6f124405f1c',
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
      })
      console.log(response)
      setNewsApiData(response.data.body)
    }
    // const fetchNewsData = async () => {

    //   axios({
    //     "method": "GET",
    //     "url": "https://bing-news-search1.p.rapidapi.com/news",
    //     "headers": {
    //       "content-type": "application/octet-stream",
    //       "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    //       "x-rapidapi-key": BING_NEWS_API_KEY,
    //       "x-bingapis-sdk": "true",
    //       "useQueryString": true
    //     }, "params": {
    //       "safeSearch": "Off",
    //       "category": "business",
    //       "textFormat": "Raw"
    //     } 
    //   })
    //     .then((response) => {
    //       setNewsApiData(response.data.value)
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })

    // }
    fetchNewsData()

  }, [])
  return (
    <Container>
      <FeedHeader />
      <FeedMain
        businessNews={newsApiData}
      />
    </Container>
  )
}

export default Feed
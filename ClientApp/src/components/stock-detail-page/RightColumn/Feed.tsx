import React, { useEffect } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import FeedHeader from '../../home-page/RightColumn/FeedHeader';
import FeedMain from '../../home-page/RightColumn/FeedMain';

interface ComponentProps {
  symbol: string;
}

  const Container = styled.div`
    color: white;
  `;

const Feed: React.FunctionComponent<ComponentProps> = ({symbol}) => {

  const [newsApiData, setNewsApiData] = React.useState([])
  useEffect(() => {
    const fetchNewsData = async () => {
      const response = await axios.get(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/${symbol}`, {
        headers: {
          'X-RapidAPI-Key': '99c7685635msh8ab852673ebd9c8p11222bjsnf6f124405f1c',
          'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
      })
      console.log(response)
      setNewsApiData(response.data.item)
    }
    fetchNewsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
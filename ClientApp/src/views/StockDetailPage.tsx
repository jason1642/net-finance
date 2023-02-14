import React, { useEffect } from 'react'
import styled from 'styled-components'
import LeftColumn from '../components/stock-detail-page/LeftColumn/LeftColumn'
import RightColumn from '../components/stock-detail-page/RightColumn/RightColumn'
import { fetchDailyStockDataSeries } from '../api-requests/alphavantage-requests'
import {useParams} from 'react-router-dom'
import StockLineGraph from '../components/graphs/StockLineGraph'

interface ComponentProps {

}



const StockDetailPage: React.FunctionComponent<ComponentProps> = () => {
  const {symbol} = useParams()

  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 768px) {
    flex-direction: column;
  }
  `;
  // const [stockData, setStockData] = useState()
  const stockData = undefined
  useEffect(() => {



       symbol && fetchDailyStockDataSeries(symbol).then(res=>{
      console.log(res)
    })
  }, [symbol])
  console.log(stockData)

  return (
    <Container>
     {symbol && <> <LeftColumn stockData={stockData} symbol={symbol} />

      <StockLineGraph 
        symbol={symbol}
      />

      <RightColumn symbol={symbol} /></>}
    </Container>
  );
}

export default StockDetailPage;
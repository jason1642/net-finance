import React, { useEffect } from 'react'
import styled from 'styled-components'
import LeftColumn from '../components/stock-detail-page/LeftColumn/LeftColumn'
import RightColumn from '../components/stock-detail-page/RightColumn/RightColumn'
import { fetchDailyStockDataSeries } from '../api-requests/alphavantage-requests'
import {useParams} from 'react-router-dom'
import StockLineGraph from '../components/graphs/StockLineGraph'
import { getCompanyProfile, getQuoteBySymbol } from '../api-requests/stock-quotes-requests'
import { MergedQuoteCompanyData, StockQuotesTypes } from '../types/stock-quotes'
import { CompanyProfileTypes } from '../types/company-profile'

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
  const [stockData, setStockData] = React.useState<StockQuotesTypes | CompanyProfileTypes | MergedQuoteCompanyData | {}>()

 const setSymbolData = async ()=> {
  let results = {}
  symbol && getCompanyProfile(symbol).then(res=>{
    results = {...res}
  })

   symbol && getQuoteBySymbol(symbol).then(res=>{
    results = {...res}
   })
   setStockData(results)
 }
  
  useEffect(() => {

setSymbolData()

    

  }, [symbol])
  console.log(stockData)

  return (
    <Container>
     {stockData !== undefined && stockData.symbol !== undefined && stockData.current_price !== undefined && symbol && <> <LeftColumn stockData={stockData} symbol={symbol} />

      {/* <StockLineGraph 
        symbol={symbol}
      /> */}

      <RightColumn symbol={symbol} /></>}
    </Container>
  );
}

export default StockDetailPage;
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import type { DailyHistoricDataTypes } from '../../../../types/stock-data-type-db';
import type { MarketOverviewTupleTypes } from './MarketOverview';
// import isMarketOpenFunction from '../../../../resources/isMarketOpenFunction'

const Container = styled.div`
display: flex;
margin-right: -20px;
justify-content: space-evenly;

`;


//tiles
const MarketTile = styled.div`
min-width: 90px;
display: flex;
flex-direction: column;
flex: 1 1 0px;
height: 25px;
padding: 10px 16px;
background-color : #40424f;
border-radius: 3px;
margin-right: 20px;
/* float: right; */
justify-content: center;
border-left: 3px solid yellow;
&:hover {
  background-color: #4d505f;
  cursor: pointer;
}
@media (max-width: 700px){

}
`;

const MarketTileRow = styled.div`
display: flex;
justify-content: space-between;
align-content: center;
`;

const MarketTileIndexName = styled.div`
align-items: center;
font-size: .9em;
font-weight: bold;
color: white;
`;

const fourMarketsNames = [
  { symbol: 'SPY', name: 'SPY' },
{ symbol: 'QQQ', name: 'QQQ' },
  { symbol: 'NDAQ', name: 'Nasdaq' },
  { symbol: 'DIA', name: 'DIA' }
]

const pairContainerFunction: (marketData: MarketOverviewTupleTypes) => React.ReactElement[] = (marketData: MarketOverviewTupleTypes) => {
  // console.log(marketData)
  try{
      if(marketData !== undefined && marketData.length > 0) return marketData.map(( {symbol, 'Meta Data': {'3. Last Refreshed': lastRefreshed}, 'Time Series (Daily)': TimeSeries}:DailyHistoricDataTypes, i:number) =>
{
  const {'1. open': open, '4. close': close} = TimeSeries[lastRefreshed]
  const changePercent: number = Number((((Number(open) - Number(close)) / Number(open)) * 100).toFixed(2)) 
  // console.log(TimeSeries)
return <MarketTile key={symbol} style={{ borderLeft: `3px solid ${colors[i]}` }}>
 <Link style={{ textDecoration: 'none' }} to={`/quote/${symbol}`}>

   <MarketTileRow>
     <MarketTileIndexName>
       {fourMarketsNames.filter(item => item.symbol === symbol)[0].name}
     </MarketTileIndexName>
     <div>
       <span style={{ color: changePercent >= 0 ? '#52e3c2' : '#ff4463', fontSize: '12px', alignContent: 'center' }}><i style={{ display: 'inline', fontSize: '14px' }} className={changePercent >= 0 ? "fas fa-caret-up" : "fas fa-caret-down"}></i>
       {changePercent}%
       </span>
     </div>
   </MarketTileRow>

   <MarketTileRow style={{ fontSize: '12px', marginTop: '4px' }}>

     <div style={{ color: "#b4b8cd", fontWeight: 300, fontSize: '12px' }}>
       {/* {isMarketOpenFunction.isItPremarket() ? 'Pre Market' : isMarketOpenFunction.isItAfterHours() ? 'After Hours' : ''} */}
     </div>
   </MarketTileRow>


 </Link>
</MarketTile>
})
return [<></>]
  }
catch(err){
  return [<></>]

}



}





interface ComponentProps {
  marketOverviewData: MarketOverviewTupleTypes;
}
type colorArrayType = [string, string, string, string]
const colors: colorArrayType = ['#52e3c2', '#ff4495','#d211fe', '#40c4ff']



const MarketPriceTable: React.FunctionComponent<ComponentProps> = ({marketOverviewData}) => {
  // console.log(isMarketOpenFunction.isItPremarket())
  // console.log(isMarketOpenFunction.isItAfterHours())
const ElementContainers: React.ReactElement[] =  useMemo(() => pairContainerFunction(marketOverviewData), [marketOverviewData])
 

// console.log(marketOverviewData)
React.useEffect(()=>{
  console.log(marketOverviewData)
},[marketOverviewData])
  return (marketOverviewData ?
    <Container>
   
      {marketOverviewData && ElementContainers}

    </Container> : <></>
  );
}

export default MarketPriceTable;


// after hours through weekend
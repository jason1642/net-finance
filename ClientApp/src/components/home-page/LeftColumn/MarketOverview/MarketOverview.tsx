import React from 'react'
import styled from 'styled-components'
import MarketPriceTable from './MarketPriceTable'
import MarketOverviewLineGraph from './MarketOverviewLineGraph';
import { fetchMultipleDailyHistoricData } from '../../../../api-requests/stock-historic-data-requests';
import { DailyHistoricDataTypes } from '../../../../types/stock-data-type-db';
import DateRangeNav from './DateRangeNav';
interface ComponentProps {
  
}  

const Container = styled.div`
      padding : 2rem 3rem;
      border-radius: 20px;
      background-color: #4d505f;
      background-color: #393945;
      margin-bottom: 6px;
  `;

  const Title = styled.h1`
      font-size: 24px;
      font-weight: 300;
      margin: 0 0 1rem 0;
      color: #8f94ab;
  `;
export type MarketOverviewTupleTypes  = [DailyHistoricDataTypes, DailyHistoricDataTypes ,DailyHistoricDataTypes] | undefined;


const MarketOverview: React.FunctionComponent<ComponentProps> = () => {

  const [marketOverviewData, setMarketOverviewData] = React.useState<MarketOverviewTupleTypes>()

  React.useEffect(() => {
    fetchMultipleDailyHistoricData('SPY,QQQ,DIA').then(res=>{
      setMarketOverviewData(res.data)
      console.log(res)
    }).catch(err=>{
      console.log(err)
    }   
      )
  }, [])



  return (
    <Container>
      <Title>Markets</Title>




     {marketOverviewData && <> <MarketPriceTable marketOverviewData={marketOverviewData} />  

<DateRangeNav />


      <MarketOverviewLineGraph marketOverviewData={marketOverviewData}/></>
      }
    </Container>
  );
}

export default MarketOverview;
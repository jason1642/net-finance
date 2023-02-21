import React, { useEffect } from 'react';
import styled from 'styled-components'
import { MergedQuoteCompanyData } from '../../../../types/stock-quotes';
import Description from './Description';
import SectorIndustryOverview from './SectorIndustryOverview'
// import {fetchStockData} from '../../../../api-requests/alphavantage-requests'
interface ComponentProps {
 
  stockData: MergedQuoteCompanyData;
}

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    border-radius: 0 0 20px 20px;
    background-color: #393945;
    color: lightgrey;
  `;
const QuoteCompanyProfile: React.FunctionComponent<ComponentProps> = ({ stockData }) => {


  // const [companyProfile, setCompanyProfile] = useState()
  useEffect(() => {

      console.log(stockData)


  }, [])


  return (
    <Container>
      { stockData ? <Description companyProfile={stockData} /> : <></>}
      { stockData ? <SectorIndustryOverview stockData={stockData}/> : <></>}
    </Container>
  );
}

export default QuoteCompanyProfile;
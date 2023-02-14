import React, { useEffect } from 'react';
import styled from 'styled-components'
import Description from './Description';
import SectorIndustryOverview from './SectorIndustryOverview'
// import {fetchStockData} from '../../../../api-requests/alphavantage-requests'
interface ComponentProps {
  symbol: string;
  stockData: any;
}

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    border-radius: 0 0 20px 20px;
    background-color: #393945;
    color: lightgrey;
  `;
const QuoteCompanyProfile: React.FunctionComponent<ComponentProps> = ({symbol, stockData}) => {


  // const [companyProfile, setCompanyProfile] = useState()
  const companyProfile = undefined
  useEffect(() => {



    // fetchStockData(symbol).then(res=>{
    //   console.log(res)
    //   setCompanyProfile(res.data)
    // })

    

  }, [])
  console.log(companyProfile)


  return (
    <Container>
      { companyProfile ? <Description companyProfile={companyProfile} /> : <></>}
      { companyProfile ? <SectorIndustryOverview stockData={stockData} companyProfile={companyProfile} /> : <></>}
    </Container>
  );
}

export default QuoteCompanyProfile;
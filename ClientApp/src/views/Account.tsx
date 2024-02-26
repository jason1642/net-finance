import * as React from 'react';
import styled from 'styled-components';
import OrderHistoryTable from '../components/account/main-sections/OrderHistoryTable';
import OverviewLineGraph from '../components/account/main-sections/OverviewLineGraph';
import PortfolioStatistics from '../components/account/main-sections/PortFolioStatistics';
import DonutGraphPortfolioOverview from '../components/account/side-panel/DonutGraphPortfolioOverview';
// import SectorDonutGraph from '../components/account/side-panel/SectorDonutGraph';
import { userApi } from "../redux/features/userApi";
import HeatMap from '../components/account/side-panel/HeatMap';


interface IAccountProps {
}

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  color: white;
  /* padding: 0 1rem; */
  margin: 0 auto;
  width: 100vw;
  margin-bottom: 3rem;
  max-width: 1400px;
  /* overflow: hidden; */
  
`;
const Title = styled.div`
  display: flex;
  font-size: 2em;
  padding: 15px;
  padding-left: 2rem;
`;


const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  /* flex-grow: 6; */
  width: 100%;
  /* border: white 1px solid; */
`;

const SideContainer = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 3;
  border: 1px solid #9b9b9b33;
  border-top: 0;
  z-index: 2;
  border-right: 0;
  border-bottom: 0;
  /* border: 1px solid green; */
  @media (max-width: 1110px) {
  flex-direction: row;
  /* width: 85%; */
  
  margin-top: 1rem;
  > * {
    border-top: 0;
    border-right: 1px solid #9b9b9b33;
    &:last-child {
      border-right: 0;
  }
  }
  
  border: 0;
}

@media (max-width: 768px) {
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  
  > * {
    width: 48%;
    &:last-child {
      border-right: 1px solid #9b9b9b33;
  }
    &:nth-child(2) {
      border-right: 0;
  }
  &:nth-child(3) {
    border-top: 1px solid #9b9b9b33;
    }
  }
}
@media (max-width: 600px) {
  flex-direction: column;  
  flex-wrap: nowrap;
  align-items: center;
  > * {
    width: 90%;
    border-bottom: 1px solid #9b9b9b33;
    border-right: 0;
    &:nth-child(3) {
      border-right: 0;
      border-bottom: 0;
    }
  }
}

`;

const Wrapper = styled.div`
  display: flex;
  border-top: 1px solid #9b9b9b33;
  @media (max-width: 1110px) {
  /* flex-direction: column; */
  border-top: 0;
  flex-wrap: wrap;
}
`;
// const PanelTitle = styled.h2`
//   display:flex;
//   font-weight: 300;
//   text-align: left;
//   /* margin: 0 auto; */
//   padding: 0 1.5rem;
// `;

const Account: React.FunctionComponent<IAccountProps> = (props) => {

   const {data: userData} = userApi.endpoints.verifyUser.useQueryState()

   React.useEffect(()=>{
    console.log(userData)
   },[userData])
  return (
    <Container>
        <Title>Portfolio</Title>

<Wrapper>


   <MainContainer> 
    {/* <DonutGraphPortfolioOverview /> */}
    <OverviewLineGraph symbol={"MSFT"}/>

    <PortfolioStatistics />

{
  userData && 
    <OrderHistoryTable userData={userData}/>
}
        </MainContainer>


     


        <SideContainer> 
            {/* <PanelTitle>Sector Allocation</PanelTitle>   */}

            {/* <SectorDonutGraph />   */}
            <DonutGraphPortfolioOverview series={[44, 55, 41, 17]} title={'Sector Allocation'}/>
            {
  userData && 
            <HeatMap accountValueHistoryData={userData.portfolio.daily_account_value_history} />
          }
            <DonutGraphPortfolioOverview series={[23, 10, 4, 3]} title={'Asset class allocation'}/>

        </SideContainer>

</Wrapper>

    </Container>
  );
};

export default Account;




import * as React from 'react';
import styled from 'styled-components';
import OverviewLineGraph from '../components/account/main-sections/OverviewLineGraph';
import PortfolioStatistics from '../components/account/main-sections/PortFolioStatistics';
import DonutGraphPortfolioOverview from '../components/account/side-panel/DonutGraphPortfolioOverview';
// import SectorDonutGraph from '../components/account/side-panel/SectorDonutGraph';
interface IAccountProps {
}

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  color: white;
  padding: 0 1rem;
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
  flex-grow: 6;
  /* border: white 1px solid; */
`;

const SideContainer = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 3;
  border: 1px solid #9b9b9b33;
  border-top: 0px solid black;
  z-index: 2;
  /* border: 1px solid green; */
`;

const Wrapper = styled.div`
  display: flex;
  border-top: 1px solid #9b9b9b33;
`;
// const PanelTitle = styled.h2`
//   display:flex;
//   font-weight: 300;
//   text-align: left;
//   /* margin: 0 auto; */
//   padding: 0 1.5rem;
// `;

const Account: React.FunctionComponent<IAccountProps> = (props) => {
  return (
    <Container>
        <Title>Portfolio</Title>

<Wrapper>


        <MainContainer> 
    {/* <DonutGraphPortfolioOverview /> */}
    <OverviewLineGraph symbol={"MSFT"}/>

    <PortfolioStatistics />
        </MainContainer>


        <SideContainer> 
            {/* <PanelTitle>Sector Allocation</PanelTitle>   */}

            {/* <SectorDonutGraph />   */}
            <DonutGraphPortfolioOverview series={[44, 55, 41, 17]} title={'Sector Allocation'}/>
            <DonutGraphPortfolioOverview series={[23, 10, 4, 3]} title={'Asset class allocation'}/>

        </SideContainer>

</Wrapper>

    </Container>
  );
};

export default Account;

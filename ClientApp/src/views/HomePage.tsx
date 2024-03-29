import React from 'react';
import MarketOverview from '../components/home-page/LeftColumn/MarketOverview/MarketOverview';
import HomeMyStocksContainer from '../components/home-page/LeftColumn/HomeMyStocks/HomeMyStocksContainer';
import styled from 'styled-components';
import Feed from '../components/home-page/RightColumn/Feed';
import LinkPortfolioNotification from '../components/home-page/RightColumn/LinkPortfolioNotification';
import { userApi } from '../redux/features/userApi';
import PortfolioInfo from '../components/home-page/RightColumn/PortfolioInfo';
import HomeSearchBar from '../components/search-bar/HomeSearchBar';
const Container = styled.div`
      display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
    margin-bottom: 1rem;
    margin-top: 29px;
    height: auto;
    max-width: 100vw;
    /* gap: 15px; */
    @media (max-width: 768px) {
      flex-direction: column;
  }
`;
const Wrapper = styled.div`
  display: flex;
      max-width: 100vw;
  flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-self: center;
    @media (max-width: 1280px) {
      /* flex-direction: column; */
  }
`;


const LeftColumnContainer = styled.div`
display: flex;
flex-direction: column;
width: calc(65% - 1rem);

@media (max-width: 768px) {
  width: 100%;
}
@media (max-width: 1280px) {
      /* flex-direction: column; */
      width: 85%;
  }
  @media (max-width: 485px) {
  width: 92%;
}
`;


const RightColumnContainer = styled.div`
     display: flex;
    /* height: 100%; */

    flex-direction: column;
    @media (max-width: 1280px) {
      /* flex-direction: column; */

  }
`;

interface ComponentProps {
  
}

const HomePage: React.FunctionComponent<ComponentProps> = () => {

  const {data: userData} = userApi.endpoints.verifyUser.useQueryState()


  return (
    <Container>
<HomeSearchBar/>
    <Wrapper>
           <LeftColumnContainer>
      <MarketOverview />
      <HomeMyStocksContainer />
    </LeftColumnContainer>





      <RightColumnContainer>

      {
        userData ? <PortfolioInfo user={userData} /> : <LinkPortfolioNotification />
      }
      <Feed />
      </RightColumnContainer>
    </Wrapper>
     
    </Container>
  );
}

export default HomePage;
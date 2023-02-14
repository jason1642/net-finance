import React from 'react';
import styled from 'styled-components'
 const Container = styled.div`
    /* border: 1px solid white; */
  `;

  const SecIndContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.25rem 0px;
    margin-bottom : 2rem;
  `;

  const Sector = styled.div`
      width: calc(50% - 1rem);
`;
  const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  `;
  const Industry = styled.div`
    width: calc(50% - 1rem);
  `;

  const Overview = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const OverviewTileLeft = styled.div`
    width: calc(50% - 1rem);
    padding-right: 1rem;
    display: flex;
    flex-direction : column;
  `;

  const TileRow = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover{
      background-color: grey;
    }
  `;

  const TileSpan = styled.span`
    margin : 0.25rem 0px;
    font-size: 14px;
  `;

  const OverviewTileRight = styled.div`
    display: flex;
    /* border: 1px solid white; */
    width: calc(50% - 1rem);
    padding-left: 1rem;
    flex-direction : column;
  `;

  const overviewLeftTileArray = [
    { name: 'Market Cap:', apiKey: 'marketCap' },
    { name: '52 Week High:', apiKey: 'week52High' },
    { name: '52 Week Low:', apiKey: 'week52Low' },
    { name: 'Average Volume:', apiKey: 'avgTotalVolume' },
    { name: 'Previous Volume:', apiKey: 'previousVolume' },
    { name: 'Primary Exchange:', apiKey: 'primaryExchange' },
    { name: 'Previous Close Price:', apiKey: 'previousClose' }
  ]

  const overviewRightTileArray = [
    { name: 'CEO:', apiKey: 'CEO' },
    { name: 'Employees:', apiKey: 'employees' },
    { name: 'Website:', apiKey: 'website' },
    { name: 'Phone:', apiKey: 'phone' },
    { name: 'Country:', apiKey: 'country' },
    { name: 'State:', apiKey: 'state' },
    { name: 'City:', apiKey: 'city' }
  ]

  interface ComponentProps {
    stockData: any;
    name?: any;
    companyProfile: any;
  }

  
const SectorIndustryOverview: React.FunctionComponent<ComponentProps> = ({stockData, name, companyProfile}) => {

 
  return (
    <Container>
      <SecIndContainer>
        <Sector>
          <Title>Sector:</Title>
          <div>{companyProfile.sector}</div>
        </Sector>
        <Industry>
          <Title>Industry:</Title>
          {companyProfile.industry}
        </Industry>
      </SecIndContainer>



      <Overview>
        <Title>Overview</Title>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <OverviewTileLeft>
            {overviewLeftTileArray.map((ele, i) =>
              <TileRow>
                <TileSpan>{ele.name}</TileSpan>
                <TileSpan>{stockData[ele.apiKey]}</TileSpan>
              </TileRow>
            )}
            {/* {console.log(props.stockData)} */}
          </OverviewTileLeft>



          <OverviewTileRight>
            {overviewRightTileArray.map((ele, i) =>
              <TileRow>
                <TileSpan>{ele.name}</TileSpan>
                <TileSpan>{companyProfile[ele.apiKey]}</TileSpan>
              </TileRow>
            )}

          </OverviewTileRight>
        </div>
      </Overview>

    </Container>
  );
}

export default SectorIndustryOverview;
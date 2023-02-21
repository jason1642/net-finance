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
    { name: 'Market Cap:', apiKey: 'market_cap' },
    // { name: '52 Week High:', apiKey: 'week52High' },
    // { name: '52 Week Low:', apiKey: 'week52Low' },
    { name: 'Average Volume:', apiKey: 'volume' },
    // { name: 'Previous Volume:', apiKey: 'previousVolume' },
    { name: 'Primary Exchange:', apiKey: 'exchange' },
    { name: 'Previous Close Price:', apiKey: 'previous_close_price' }
  ]

  const overviewRightTileArray = [
    { name: 'CEO:', apiKey: 'ceo' },
    { name: 'Employees:', apiKey: 'employees' },
    { name: 'Website:', apiKey: 'website' },
    { name: 'Phone:', apiKey: 'phone' },
    { name: 'Country:', apiKey: 'country' },
    { name: 'State:', apiKey: 'state' },
    { name: 'City:', apiKey: 'city' }
  ]

  interface ComponentProps {
    stockData: any;
  }

  
const SectorIndustryOverview: React.FunctionComponent<ComponentProps> = ({stockData,}) => {

 console.log(stockData)
  return (
    <Container>
      <SecIndContainer>
        <Sector>
          <Title>Sector:</Title>
          <div>{stockData.sector}</div>
        </Sector>
        <Industry>
          <Title>Industry:</Title>
          {stockData.industry}
        </Industry>
      </SecIndContainer>



      <Overview>
        <Title>Overview</Title>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <OverviewTileLeft>
            {overviewLeftTileArray.map(({name, apiKey}, i) =>
              <TileRow>
                <TileSpan>{name}</TileSpan>
                <TileSpan>{apiKey === 'market_cap' || apiKey === 'volume' ?
                Intl.NumberFormat('en-US', {
                  notation: "compact",
                  maximumFractionDigits: 1
                }).format(stockData[apiKey])
                :
                 stockData[apiKey]}
                 </TileSpan>
              </TileRow>
            )}
            {/* {console.log(props.stockData)} */}
          </OverviewTileLeft>



          <OverviewTileRight>
            {overviewRightTileArray.map((ele, i) =>
              <TileRow>
                <TileSpan>{ele.name}</TileSpan>
                <TileSpan>{stockData[ele.apiKey]}</TileSpan>
              </TileRow>
            )}

          </OverviewTileRight>
        </div>
      </Overview>

    </Container>
  );
}

export default SectorIndustryOverview;
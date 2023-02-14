import React from 'react';
import styled from 'styled-components'
import QuoteOverview from './QuoteOverview';
import CompanyProfileContainer from './QuoteCompanyProfile/CompanyProfileContainer'

interface ComponentProps{ 
  stockData: any;
  symbol: string;
}
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(67% - 1rem);
    margin-right: 2rem;
    flex-wrap: wrap;
    background-color: #32323e;
    @media (max-width: 768px) {
    /* flex-direction: column; */
    width: 100%;
    margin-bottom: 1rem;
  }
  `;
const LeftColumn: React.FunctionComponent<ComponentProps> = ({stockData, symbol}) => {



  // console.log(props)
  return (
    <>{
      stockData ?
        <Container>
          {stockData ? <QuoteOverview stockData={stockData} /> : <></>}
          <CompanyProfileContainer stockData={stockData} symbol={symbol} />
        </Container> : <></>
    }</>
  );
}

export default LeftColumn;
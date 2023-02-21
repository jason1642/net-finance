import React from 'react';
import styled from 'styled-components'
import { StockQuotesTypes } from '../../../../types/stock-quotes';

  const Container = styled.div`
    display:flex;
    flex-direction: column;
    /* width: 2325px; */
    /* height: auto; */
    /* width: 100%; */
  `;

  const TestDiv = styled.div`
    display: flex;
    padding: 0;
    margin: 0;

  `;
  const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 0.9rem 0 0.9rem 0;
  height: 46px;
  text-align: right;
  justify-content: center;
  padding-left: 1.5rem;
    width: 110px;
    /* max-width: 130px; */
    min-width: 110px;
    font-size: 14px;
    color: white;
    overflow: hidden;
    /* font-size: 14px; */
  /* height: 100%; */
  border-bottom: 1px solid grey;


  `;
 
interface ComponentProps {
  stockData: StockQuotesTypes[];
}

const HomeMyStocksInfo: React.FunctionComponent<ComponentProps> = ({stockData = []}) => {


  console.log(stockData)
  return (
    <Container>


      {stockData.map(({current_price,price_change, market_cap, price_change_percent, previous_close_price, volume}, i: number) => <TestDiv key={i}>

        <Cell 
        style={{paddingLeft: 0}}
        >${current_price}</Cell>
        <Cell style={{ color: price_change > 0 ? '#52e3c2' : '#ff4463' }}>{(price_change_percent).toFixed(2)}%</Cell>
        <Cell style={{ color: price_change > 0 ? '#52e3c2' : '#ff4463' }}>${price_change.toFixed(2)}</Cell>
        {/* <Cell>{(ele.ytdChange * 100).toFixed(2)}%</Cell> */}
        <Cell>${previous_close_price}</Cell>

        {/* <Cell>${ele.week52High}</Cell>
        <Cell>${ele.week52Low}</Cell> */}
        <Cell>{Intl.NumberFormat('en-US', {
  notation: "compact",
  maximumFractionDigits: 1
}).format(volume)}</Cell>
        <Cell>${Intl.NumberFormat('en-US', {
  notation: "compact",
  maximumFractionDigits: 1
}).format(market_cap)}</Cell>
      </TestDiv>)}


    </Container>
  );
}

export default HomeMyStocksInfo;


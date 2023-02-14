import React from 'react';
import styled from 'styled-components'

  const Container = styled.div`
    display:flex;
    flex-direction: column;
    /* width: 2325px; */
    height: auto;
  `;

  const TestDiv = styled.div`
    display: flex;
    
   
  `;
  const Cell = styled.div`
  display: flex;
  align-items: center;
  padding: 1.09rem 0 1.09rem 0;
  height: 45px;
  text-align: right;
  padding-left: 2rem;
    width: 110px;
    max-width: 110px;
    min-width: 110px;
    font-size: 14px;
    color: white;
    
  /* height: 100%; */
  border-bottom: 1px solid grey;


  `;

interface ComponentProps {
  stockData: any;
}

const HomeMyStocksInfo: React.FunctionComponent<ComponentProps> = ({stockData}) => {


  // console.log(stockData)
  return (
    <Container>


      {stockData.map((ele: any, i: number) => <TestDiv key={i}>

        <Cell>${ele.latestPrice}</Cell>
        <Cell style={{ color: ele.change > 0 ? '#52e3c2' : '#ff4463' }}>{(ele.changePercent * 100).toFixed(2)}%</Cell>
        <Cell style={{ color: ele.change > 0 ? '#52e3c2' : '#ff4463' }}>${ele.change}</Cell>
        <Cell>{(ele.ytdChange * 100).toFixed(2)}%</Cell>
        <Cell>${ele.previousClose}</Cell>
        <Cell>${ele.week52High}</Cell>
        <Cell>${ele.week52Low}</Cell>
        <Cell>${ele.marketCap}</Cell>
      </TestDiv>)}


    </Container>
  );
}

export default HomeMyStocksInfo;


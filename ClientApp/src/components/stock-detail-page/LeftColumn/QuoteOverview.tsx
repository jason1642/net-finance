import React from 'react';
import styled from 'styled-components'
import { MergedQuoteCompanyData } from '../../../types/stock-quotes';

const Container = styled.div`
padding : 2rem 2.5rem 0px;
padding-bottom: 15px;
margin-bottom: .3rem;
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
border-radius: 20px 20px 0 0;
background-color: #393945;
color: white;
`;
const Content = styled.div`
`;
const RowOne = styled.div`
display: flex;
justify-content: space-between;
flex-grow: 1;
margin-bottom: 6px;
color: black;
`;
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

`
const Logo = styled.img`
  width: 80px;
  height: 80px;
  padding-right: 1rem;
`

const RowTwo = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`;
const RowTwoSpan = styled.span`
margin-left: 5px;
font-size: 14px;
padding-left: 5px;
text-align: right;
`;

interface ComponentProps {
  stockData: MergedQuoteCompanyData;
  
}

const QuoteOverview: React.FunctionComponent<ComponentProps> = ({stockData}) => {
 
  const greenOrRed = () => +(stockData.price_change_percent * 100).toFixed(2) > 0 ? '#52e3c2' : '#ff4495'
  const caretUpOrDown = () => +(stockData.price_change_percent * 100).toFixed(2) > 0 ? <i style={{
    color: '#52e3c2'
  }} className='fas fa-caret-up' /> : <i style={{
    color: '#ff4495'
  }} className='fas fa-caret-down' />

  // const ytdGreenOrRed = () => +(stockData.ytdChange * 100).toFixed(2) > 0 ? '#52e3c2' : '#ff4495'
  console.log(stockData)
  return (
    <>

      {stockData ?
        <Container>
          <Content> 
            <HeaderRow>
            <Logo  alt='logo' src={`https://api.twelvedata.com/logo/${stockData.website}`}/>
            <span style={{ fontSize: '28px' }}>{stockData.name}</span>


            </HeaderRow>
            <RowOne>
              <div style={{ display: 'block', color: 'white' }}>


                <span style={{ fontSize: '20px', marginRight: '15px', marginLeft: '0.3rem' }}>${stockData.current_price}</span>
                <span style={{ fontSize: '16px', marginRight: '12px', marginLeft: '4px', color: greenOrRed() }}>{caretUpOrDown()}
                  {(stockData.price_change_percent * 100).toFixed(2)}%
                </span>
                <span style={{ color: greenOrRed() }}>{stockData.price_change.toFixed(2)} $</span>
              </div>

              {/* <div style={{ textAlign: 'right', fontSize: '16px', color: 'white', alignSelf: 'flex-end' }}>
                1Y Return:<i style={{
                  margin: '0 5px',
                  color: ytdGreenOrRed()
                }} className='fas fa-caret-up' />
                <span style={{ color: ytdGreenOrRed() }}>{(stockData.ytdChange * 100).toFixed(2)}%</span>
              </div> */}
            </RowOne>




            <RowTwo>
              <div>
                <div style={{ paddingBottom: '6px' }}>(108.56 -0.28% -0.30 after hours)</div>
                <div style={{ fontStyle: 'italic', marginRight: '2rem' }}>Real Time (last trade Fri, 7:56pm EDT)</div>
              </div>
              <div style={{ display: 'flex' }}>
                <RowTwoSpan style={{ paddingLeft: '0.5em' }}>Bid: ${stockData.bid}</RowTwoSpan>
                <RowTwoSpan style={{}}>Ask: ${stockData.ask}</RowTwoSpan>
                <RowTwoSpan style={{}}>Volume: {Intl.NumberFormat('en-US', {
                  notation: "compact",
                  maximumFractionDigits: 1
                }).format(stockData.volume)}</RowTwoSpan>
              </div>


            </RowTwo>
          </Content>
        </Container>
        : <></>}
    </>
  );
}

export default QuoteOverview;
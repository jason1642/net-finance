import React from 'react';
import styled from 'styled-components';

  // Header
  const Header = styled.div`
    height: 53px;
    /* min-height: 56px; */
    display: flex;
    align-items: center;
    border-top-width: 2px;
    border-top-color: #32323e;
    color: #8f94ab;
    width: 100%;
`;

  const HeaderItem = styled.div`
    display: inline-flex;
    white-space: nowrap;
    font-size: 14px;
    padding-left:1.5rem;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 110px;
    max-width: 110px;
    min-width: 110px;
    border-bottom: 1px solid grey;

`;



const HomeMyStocksMainHeader = () => {




  const list = [
    'Price',
    'Today % Change',
     'Today $ Change', 
    //  'YTD Return', 
     'Prev Close',
      // '52 Week High',
      // '52 Week Low',
      'Volume',
       'Market Cap'
      ];

  const menu = list.map((ele, i) =>
    // <HeaderItem text={ele} key={i} selected={i} />
    <HeaderItem style={{paddingLeft: i === 0 ? 0 : '1.5rem'}} key={i}>{ele}</HeaderItem>
  )




  return (

    <Header>
      {menu}
    </Header>
  );
}

export default HomeMyStocksMainHeader;



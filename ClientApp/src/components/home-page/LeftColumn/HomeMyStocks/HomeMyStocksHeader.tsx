import React from 'react'
import styled from 'styled-components'

  const Header = styled.div`
  padding : 2rem 3rem;
`;
  const Title = styled.h2`
  margin: 0;
  color: #8f94ab;
  font-size: 24px;
  font-weight: 400;
  `;
  const RowOne = styled.div`
    display: flex;
    flex-grow: 1; 
    justify-content: space-between;
`;

  const ToggleTray = styled.div`
    display: flex;
    width: auto;
    border-radius: 30px;
    background-color: #32323e;
    color: white;
  `;

  const Button = styled.div`
    display: inline;
    color: #b4b8cd;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 30px;
    font-weight: 700px;
    &:hover{
      cursor: pointer;
      background-color:#4d505f;
    }
  `;

  const RowTwo = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
    margin-top: 1rem;
    margin-bottom: -1.5rem;
`;

  const DropDownButton = styled.div` 
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    display: inline-block;
    border-radius: 15px;
    padding: 0.45rem 1.2rem 0.4rem;
    font-size: 12px;
    background-color: #4d505f;
    font-weight: bold;
    &:hover{
      cursor: pointer;
    }
  `;
  
  
const HomeMyStocksHeader = () => {




  return (
    <Header>





      <RowOne>
        <Title>My Stocks</Title>
        <ToggleTray>
          <Button>My Stocks</Button>
          <Button>Top Movers</Button>
          <Button>Trending</Button>
        </ToggleTray>
      </RowOne>




      <RowTwo>

        <DropDownButton style={{ color: 'white' }}> <i style={{ height: '12px', marginRight: '6px', marginTop: '1px' }} className="fas fa-filter"></i>

All

          {/* <div>Following</div>
          <div>Holding</div> */}
        </DropDownButton>


      </RowTwo>
    </Header>

  );
}

export default HomeMyStocksHeader;


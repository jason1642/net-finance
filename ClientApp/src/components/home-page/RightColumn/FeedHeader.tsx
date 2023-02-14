import React, { useState } from 'react'
import styled from 'styled-components'


  const Container = styled.div`
    padding: 2rem;
    margin-bottom: 2px;
    border-radius: 20px 20px 0 0;
    background-color: #393945;
  `;

  const RowOne = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
    /* flex-direction: column; */
  }
  `;
  const Title = styled.div`
    margin-right: 2.5rem;
    font-size: 24px;
    font-weight: 400;
    color: #8f94ab;
  `;
  const Nav = styled.div`
    display: flex;
    border-radius: 30px;
    background-color: #32323e;
    width: auto;

    @media (max-width: 768px) {
      width: 50%;
      justify-content: space-between;
  }
  `;
  const Button = styled.div`
    display: inline;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 30px;
    font-weight: 700;
    width: inherit;
    overflow: visible;
    margin: 0;
    text-align: center;
    word-spacing: normal;
    width: auto;
    color: #8f94ab;
    &:hover{
      color: white;
      cursor: pointer;
    }
    @media (max-width: 768px) {
  }
  `;

  const RowTwo = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  `;

  const DropDownContainer = styled("div")`
    width: 8em;
    position: absolute;
  
`;
  const ListItem = styled.li`
  list-style: none;
  width: 100%;
  padding-bottom: 5px;
  margin-bottom: 0.8em;
  &:first-child {
    
    }
    &:hover{
      background-color: #6e7288;
    }
  `;

  const DropDownList = styled.ul`
    padding: 0;
    margin: 0;
    width: 100%;
    background: #ffffff;
    border: none;
    border-radius: 0 0 15px 15px;
    box-sizing: border-box;
    color: white;
    background-color: #4d505f;
    font-size: 12px;
    text-align: center;
    font-weight: 500;
    &:first-child {
      padding-top: 0.8em;
    }

`;

  const DropDownHeader = styled.div`
  margin-bottom: 0em;
  padding: 0.4em 2em 0.4em 1em;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  color: white;
  background-color: #4d505f;
  `;

  const DropDownListContainer = styled("div")`
    height: inherit;
    width: 100%;
  `;

const FeedHeader = () => {



  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value:any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const options = ["All Articles", "Premium Articles"];

  return (
    <Container>
      <RowOne>
        <Title>Feed</Title>
        <Nav>
          <Button>Following</Button>
          <Button>Top</Button>
          <Button>Macro</Button>
          <Button>Events</Button>
        </Nav>
      </RowOne>
      <RowTwo>

        <DropDownContainer onMouseLeave={toggling} onMouseEnter={toggling}>
          <DropDownHeader
            style={{ borderRadius: isOpen ? '12px 12px 0 0' : '15px' }}
          ><i style={{ color: 'white', fontSize: '10px', paddingRight: '4px' }} className="fas fa-filter"></i>All Articles</DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>

      </RowTwo>
    </Container >
  );
}

export default FeedHeader;
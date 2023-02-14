import * as React from 'react';
import styled from 'styled-components';
interface IDateRangeNavProps {
}


const Container = styled.div`
  display:flex;
  justify-content: space-around;
  padding-top: 15px;
  width: 100%;
`;

const Item = styled.div`
  display:flex;
  /* background-color: grey; */
  border-radius: 10px;
  padding: 4px 10px;
  color: white;
  &:hover{ 
    cursor: pointer;
    background-color: #4bbea6;
  }
`;
const DateRangeNav: React.FunctionComponent<IDateRangeNavProps> = (props) => {
  return (
    <Container> 
        <Item>1D</Item>
        <Item>1M</Item>
        <Item>1Y</Item>
    </Container>
  );
};

export default DateRangeNav;

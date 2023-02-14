import React from 'react';
import styled from 'styled-components'
import Feed from './Feed'


const Container = styled.div`
display: flex;
flex-direction: column;
width: calc(33% + 1rem);
border-radius: 15px;
@media (max-width: 768px) {
width: 100%;
}
`;


interface ComponentProps{ 
  symbol: string;
}
const RightColumn: React.FunctionComponent<ComponentProps> = ({symbol}) => {

  return (
    <Container>
      <Feed symbol={symbol} />
    </Container>
  );
}

export default RightColumn;
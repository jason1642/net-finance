import * as React from 'react';
import styled from 'styled-components';
interface ISectorDonutGraphProps {
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

`;


const SectorDonutGraph: React.FunctionComponent<ISectorDonutGraphProps> = (props) => {


  return (
    <Container>

        <Title>Sector Allocations</Title>
        <p>This is the Sector Donut graph of your positions</p>
    </Container>
  );
};

export default SectorDonutGraph;

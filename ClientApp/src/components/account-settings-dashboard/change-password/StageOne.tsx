import * as React from 'react';
import styled from 'styled-components';
interface IStageOneProps {
}


const Container = styled.div`
  display:flex;
`;
const HeadText = styled.h2`
  color: white;
  font-weight: 400;
`;
const StageOne: React.FunctionComponent<IStageOneProps> = (props) => {
  return (
    <Container>
<HeadText>Changing password for EMAIL</HeadText>
    </Container>
  );
};

export default StageOne;

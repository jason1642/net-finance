import * as React from 'react';
import styled from 'styled-components';
// import StageOne from './StageOne';
// import StageTwo from './StageTwo';

interface IChangePasswordProps {
}

const Container = styled.div`
  display: flex;
`;

const ChangePassword: React.FunctionComponent<IChangePasswordProps> = (props) => {

    // const [stageState, 
    //   setStageState
    // ] = React.useState<any>({
    //     stage: 1,
    // })
// Password should be min-5 characters max-15 characters. must contain number and letter
  return (
    <Container>
    {/* {
        stageState.stage === 1 ? 
        <StageOne></StageOne> : 
        <StageTwo></StageTwo>
    } */}



    </Container>
  );
};

export default ChangePassword;

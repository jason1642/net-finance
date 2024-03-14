import * as React from 'react';
import styled from 'styled-components';

interface IChangePasswordProps {
}

const Container = styled.div`
  display: flex;
`;

const ChangePassword: React.FunctionComponent<IChangePasswordProps> = (props) => {
  return (
    <Container>
        Change your password on this tab
    </Container>
  );
};

export default ChangePassword;

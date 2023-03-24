import * as React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display:flex;
`;
interface IPublicChatProps {
}

const PublicChat: React.FunctionComponent<IPublicChatProps> = (props) => {
  return <Container>
    This is the public chat



    Display


    User input
  </Container>;
};

export default PublicChat;

import * as React from 'react';
import styled from 'styled-components';
import UserInput from '../components/public-chat/UserInput';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  border: 1px solid white;
  padding: 1rem;
`;
interface IPublicChatProps {
}

const PublicChat: React.FunctionComponent<IPublicChatProps> = (props) => {
  return <Container>
    This is the public chat



    Display


    <UserInput />
  </Container>;
};

export default PublicChat;

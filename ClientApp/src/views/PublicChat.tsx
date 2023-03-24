import * as React from 'react';
import styled from 'styled-components';
import ChatDisplay from '../components/public-chat/ChatDisplay';
import ChatHeader from '../components/public-chat/Header';
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
    <ChatHeader />

    <ChatDisplay />


    <UserInput />
  </Container>;
};

export default PublicChat;

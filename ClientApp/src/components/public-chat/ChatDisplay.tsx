import * as React from 'react';
import styled from 'styled-components';
import ChatBubble from './ChatBubble';


interface IChatDisplayProps {
}


const Container = styled.div`
   display: flex;
   flex-direction: column;
   background-color: grey;
   padding: 1rem;
   border-radius: 5px;

`;
const ChatDisplay: React.FunctionComponent<IChatDisplayProps> = (props) => {
  return <Container>
    This is the chat display - last 100 messages are displayed only
    <ChatBubble />
    <ChatBubble />
    <ChatBubble />
    <ChatBubble />
  </Container>;
};

export default ChatDisplay;

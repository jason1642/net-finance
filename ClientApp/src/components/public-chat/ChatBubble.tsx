import * as React from 'react';
import styled from 'styled-components';


interface IChatBubbleProps {
}


const Container = styled.div`
  display: flex;
  background-color: #3030f8;
`;


const ChatBubble: React.FunctionComponent<IChatBubbleProps> = () => {
  return <Container>
    This is a chat bubble
  </Container>;
};

export default ChatBubble;

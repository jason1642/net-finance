import * as React from 'react';
import styled from 'styled-components';


interface IChatBubbleProps {
    message: string;
}


const Container = styled.div`
  display: flex;
  background-color: #3434f1;
  padding: .6rem;
  color: #ededed;
  margin: .45rem 0;
  border-radius: 9px;

  border-bottom-left-radius: 0;
  /* width: 56%; */
`;


const ChatBubble: React.FunctionComponent<IChatBubbleProps> = ({message}) => {
  return <Container>
   {message}
  </Container>;
};

export default ChatBubble;

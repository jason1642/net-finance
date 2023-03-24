import * as React from 'react';
import styled from 'styled-components';


interface IChatBubbleProps {
    message: string;
    isFromCurrentUser: boolean;
}


const Container= styled.div<{isFromCurrentUser: boolean}>`
  display: flex;
  background-color: ${({isFromCurrentUser}) => isFromCurrentUser ? "#1eb816d4" : "#3838f0e6"};

  padding: .6rem;
  color: #ededed;
  margin: .45rem 0;
  border-radius: ${({isFromCurrentUser}) => isFromCurrentUser ? "12px 12px 0px 12px" : "12px 12px 12px 0px"};
  
  max-width: 65%;
`;


const ChatBubble: React.FunctionComponent<IChatBubbleProps> = ({message, isFromCurrentUser = false}) => {
  return <Container isFromCurrentUser={isFromCurrentUser}>
   {message}
  </Container>;
};

export default ChatBubble;

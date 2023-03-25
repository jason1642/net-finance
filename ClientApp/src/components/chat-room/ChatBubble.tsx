import * as React from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface IChatBubbleProps {
    message: string;
    isFromCurrentUser: boolean;
    dateCreated: Date;
}


const Container= styled.div<{isFromCurrentUser: boolean}>`
  display: flex;
  flex-direction: column;
  background-color: ${({isFromCurrentUser}) => isFromCurrentUser ? "#09a459" : "#1f7dd7"};
  line-height: 1.3rem;
  padding: .6rem;
  color: #ffffff;
  margin: .45rem 0;
  border-radius: ${({isFromCurrentUser}) => isFromCurrentUser ? "12px 12px 0px 12px" : "12px 12px 12px 0px"};
  
  max-width: 65%;
`;

const TimeStamp = styled.div`
  display: flex;
  color: #cbcaca;
  justify-content: flex-end;
`;


const ChatBubble: React.FunctionComponent<IChatBubbleProps> = ({message, dateCreated, isFromCurrentUser = false}) => {
  return <Container isFromCurrentUser={isFromCurrentUser}>
   {message}

   <TimeStamp>{new Date(dateCreated).toLocaleTimeString()}</TimeStamp>
  </Container>;
};

export default ChatBubble;

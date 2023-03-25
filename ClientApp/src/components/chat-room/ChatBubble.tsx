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
  background-color: ${({isFromCurrentUser}) => isFromCurrentUser ? "#1eb816d4" : "#3838f0e6"};

  padding: .6rem;
  color: #ededed;
  margin: .45rem 0;
  border-radius: ${({isFromCurrentUser}) => isFromCurrentUser ? "12px 12px 0px 12px" : "12px 12px 12px 0px"};
  
  max-width: 65%;
`;

const TimeStamp = styled.div`
  display: flex;
`;


const ChatBubble: React.FunctionComponent<IChatBubbleProps> = ({message, dateCreated, isFromCurrentUser = false}) => {
  return <Container isFromCurrentUser={isFromCurrentUser}>
   {message}

   <TimeStamp>{moment(dateCreated).format()}</TimeStamp>
  </Container>;
};

export default ChatBubble;

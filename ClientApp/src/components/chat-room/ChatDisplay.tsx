import * as React from 'react';
import styled from 'styled-components';
import ChatBubble from './ChatBubble';


interface IChatDisplayProps {
    chatRoomData: any;
}

const Container = styled.div`
   display: flex;
   /* flex-direction: column; */
   flex-wrap: wrap;
   background-color: grey;
   padding: 1rem;
   border-radius: 5px;

`;
const Row = styled.div`
  display: flex;
  width: 100%;
`;
const Filler = styled.div`
  display: flex;
  flex-grow: 1;
`;


const ChatDisplay: React.FunctionComponent<IChatDisplayProps> = ({chatRoomData:{messages}}) => {
  console.log(messages)
  return <Container>
    This is the chat display - last 100 messages are displayed only
    {
        messages.map((item:any)=> <Row>
            <ChatBubble message={item.message}/>
            <Filler />
        </Row>)
    }
  </Container>;
};

export default ChatDisplay;

import * as React from 'react';
import styled from 'styled-components';
import ChatBubble from './ChatBubble';


interface IChatDisplayProps {
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
const SeedMessages = [
    'Message1',
    'Message2',
    'Message3',
    'Message4',
    'Message5',
    'Message6',
    'Message7',
    'Message8',
    'Message9W',
]

const ChatDisplay: React.FunctionComponent<IChatDisplayProps> = (props) => {
  return <Container>
    This is the chat display - last 100 messages are displayed only
    {
        SeedMessages.map(item=> <Row>
            <ChatBubble message={item}/>
            <Filler />
        </Row>)
    }
  </Container>;
};

export default ChatDisplay;

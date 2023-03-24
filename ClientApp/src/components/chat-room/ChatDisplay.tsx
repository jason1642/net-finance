import * as React from 'react';
import styled from 'styled-components';
import { UserAccountTypes } from '../../types/user-account';
import ChatBubble from './ChatBubble';


interface IChatDisplayProps {
    chatRoomData: any;
    userData: UserAccountTypes | undefined;
}

const Container = styled.div`
   display: flex;
   /* flex: 1 1 auto; */
   flex-wrap: wrap;
   /* background-color: grey; */
   padding: 1rem;
   border-radius: 5px;

`;
const Title = styled.div`
  display: flex;
  color: #e5e5e5;
  margin: 0 auto;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;

const Row = styled.div`
  display: flex; 
  width: 100%;
  max-width: 65%;
`;
const Filler = styled.div`
  display: flex;
  flex-grow: 1;
`;


const ChatDisplay: React.FunctionComponent<IChatDisplayProps> = ({chatRoomData:{messages}, userData,}) => {
  console.log(userData)
  return <Container>
    <Title>This is the chat display - last 100 messages are displayed only</Title>
    {
        messages.map((item:any)=> <Row>
            <ChatBubble message={item.message}/>
            <Filler />
        </Row>)
    }
  </Container>;
};

export default ChatDisplay;

import React, { useEffect, useRef } from 'react'
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
   overflow-y: auto;
   &::-webkit-scrollbar {
        width: 6px;
        border-radius: 15px;
        /* background-color: rgb(82, 227, 194); */
        :hover {
        cursor: pointer;
      }
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(82, 227, 193, 0.736);
      border-radius: 15px;
     
    }
   
    
    `;
const Title = styled.div`
  display: flex;
  color: #e5e5e5;
  margin: 0 auto;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
`;

const Row = styled.div<{isFromCurrentUser: boolean}>`
  display: flex; 
  flex-direction: ${({isFromCurrentUser}) => isFromCurrentUser ? "row-reverse" : "row"};

  width: 100%;
`;
const Filler = styled.div`
  display: flex;
  flex-grow: 1;
`;


const ChatDisplay: React.FunctionComponent<IChatDisplayProps> = ({chatRoomData:{messages}, userData}) => {
  // console.log(messages)
  // console.log(userData && userData._id)
  const bottomElementRef = useRef<HTMLDivElement>(null)


  const scrollToBottom = () => {
    bottomElementRef.current?.scrollIntoView(
      {
        // behavior: 'smooth',
        // Notify bottom of display that there is a new message, click button to scroll down smooth
      }
      )
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  return <Container>
    <Title>Displaying up to 100 previous messages</Title>
    {
        userData && messages.map((item:any)=> <Row key={item.created_at + item.message} isFromCurrentUser={item.sender_id === userData._id}>
            <ChatBubble dateCreated={item.created_at} isFromCurrentUser={item.sender_id === userData._id} message={item.message}/>
            <Filler />
        </Row>)
    }

<div ref={bottomElementRef} />

  </Container>;
};

export default ChatDisplay;

import * as React from 'react';
import styled from 'styled-components';
import { getRoomMessages } from '../api-requests/chat-room-requests';
import ChatDisplay from '../components/chat-room/ChatDisplay';
import ChatHeader from '../components/chat-room/Header';
import UserInput from '../components/chat-room/UserInput';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  border: 1px solid white;
  padding: 1rem;
`;
interface IPublicChatProps {
}

const PublicChat: React.FunctionComponent<IPublicChatProps> = (props) => {

    const [publicChatRoomData, setPublicChatRoomData]= React.useState<Array<any>>()

    React.useEffect(()=>{
        getRoomMessages('641ddeb20052e8bc2b1edd6a').then(res=>{
            console.log(res.data)
            setPublicChatRoomData(res.data)
        })
    },[])

  return <Container>
    {
      publicChatRoomData &&
       <><ChatHeader chatRoomData={publicChatRoomData}/>
    <ChatDisplay chatRoomData={publicChatRoomData}/>
</> 
}
    <UserInput />
  </Container>;
};

export default PublicChat;

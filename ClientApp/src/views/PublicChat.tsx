import React, { useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { getRoomMessages } from '../api-requests/chat-room-requests';
import ChatDisplay from '../components/chat-room/ChatDisplay';
import ChatHeader from '../components/chat-room/Header';
import UserInput from '../components/chat-room/UserInput';
import { userApi } from "../redux/features/userApi";
import {WebSocketContext} from '../context/PublicChatWebSocket'
import { ChatroomTypes, SingleMessageTypes } from '../types/chatroom-types';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 80%;
  margin: .5rem auto;
  border-radius: 15px;
  justify-content: space-between;
  padding: 1rem;
  max-height: 85vh;
  max-width: 1200px;
`;
interface IPublicChatProps { 
}

const PublicChat: React.FunctionComponent<IPublicChatProps> = ({}) => {
    const { newMessagesList, wsState, connectWs, closeWs } = useContext(WebSocketContext);

    const {data: userData} = userApi.endpoints.verifyUser.useQueryState()
    const [publicChatroomData, setPublicChatroomData] = useState<ChatroomTypes>()
    const allMessages = React.useMemo<Array<SingleMessageTypes>>(()=>[...(publicChatroomData?.messages || []), ...newMessagesList],[newMessagesList, publicChatroomData])

    useEffect(() => {
        console.log('this is the message list', newMessagesList, )
        console.log('This is the web socket state', wsState)
        
    }, [newMessagesList, wsState]);
 


    useEffect(()=>{
       getRoomMessages('641ddeb20052e8bc2b1edd6a').then(res=>{
            console.log(res.data)
            setPublicChatroomData(res.data)
        }).catch(err=>{
            console.log(err)
        })    
        connectWs()
        return ()=> {
            closeWs();
        }
    },[])


  return <Container>
    {
      publicChatroomData && userData &&
       <><ChatHeader  chatRoomData={publicChatroomData}/>
    <ChatDisplay  userData={userData} allMessages={allMessages}/>
        <UserInput userId={userData?._id} roomId={publicChatroomData?._id}/>

</> 
}

  </Container>;
};

export default PublicChat;
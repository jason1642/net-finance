import React, { useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { getRoomMessages } from '../api-requests/chat-room-requests';
import ChatDisplay from '../components/chat-room/ChatDisplay';
import ChatHeader from '../components/chat-room/Header';
import UserInput from '../components/chat-room/UserInput';
import { userApi } from "../redux/features/userApi";
import {WebSocketContext, WebSocketConsumer} from '../context/PublicChatWebSocket'
import { ChatroomTypes, SingleMessageTypes } from '../types/chatroom-types';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 80%;
  margin: .5rem auto;
  /* border: 1px solid grey; */
  border-radius: 15px;
  justify-content: space-between;
  
  padding: 1rem;
  max-height: 85vh;
`;
interface IPublicChatProps { 
}

const PublicChat: React.FunctionComponent<IPublicChatProps> = ({}) => {
    const { newMessagesList, wsState, connectWs, closeWs } = useContext(WebSocketContext);

    const {data: userData} = userApi.endpoints.verifyUser.useQueryState()
    const [publicChatroomData, setPublicChatroomData] = React.useState<ChatroomTypes>()
    const allMessages = React.useMemo<Array<SingleMessageTypes>>(()=>[...(publicChatroomData?.messages || []), ...newMessagesList],[newMessagesList, publicChatroomData])

    useEffect(() => {
        console.log('this is the message list', newMessagesList, )
        console.log('This is the web socket state', wsState)
        
    }, [newMessagesList, wsState]);
 

    // "undefined" means the URL will be computed from the `window.location` object
    // const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:44465'
    useEffect(()=>{
        // let newSocket: Socket<ServerToClientEvents, ClientToServerEvents>;
       getRoomMessages('641ddeb20052e8bc2b1edd6a').then(res=>{
            console.log(res.data)
            setPublicChatroomData(res.data)
        }).catch(err=>{
            console.log(err)
        })    
        connectWs()
        // WebSocketConsumer()
        return ()=> {
            closeWs();
        }
    },[])

    const onEmit = () => {
        // socket.send('Hello, server!');
    }




  return <Container>
    {
      publicChatroomData && userData &&
       <><ChatHeader  chatRoomData={publicChatroomData}/>
    <ChatDisplay  userData={userData} allMessages={allMessages}/>
        <UserInput userId={userData?._id} roomId={publicChatroomData?._id}/>

</> 
}
{/* <div style={{flexGrow:1}}></div> */}
{/* <button onClick={onEmit}>Emit</button> */}
  </Container>;
};

export default PublicChat;
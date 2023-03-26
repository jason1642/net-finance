import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRoomMessages } from '../api-requests/chat-room-requests';
import ChatDisplay from '../components/chat-room/ChatDisplay';
import ChatHeader from '../components/chat-room/Header';
import UserInput from '../components/chat-room/UserInput';
import { userApi } from "../redux/features/userApi";
import { io, Socket } from 'socket.io-client';
import { SocketData, ClientToServerEvents, ServerToClientEvents, InterServerEvents } from '../types/socket-io-types';

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

const PublicChat: React.FunctionComponent<IPublicChatProps> = (props) => {

    const {data: userData} = userApi.endpoints.verifyUser.useQueryState()
    const [publicChatRoomData, setPublicChatRoomData]= React.useState<Array<any>>()
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);

    // "undefined" means the URL will be computed from the `window.location` object
    const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';
    const socket: Socket<ServerToClientEvents, ClientToServerEvents>  = io(URL);
    useEffect(()=>{
        getRoomMessages('641ddeb20052e8bc2b1edd6a').then(res=>{
            console.log(res.data)
            setPublicChatRoomData(res.data)
        })
    },[])

   React.useEffect(() => {
        function onConnect() {
          setIsConnected(true);
        }
    
        function onDisconnect() {
          setIsConnected(false);
        }
    
        function onFooEvent(value) {
          setFooEvents(previous => [...previous, value]);
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvent);
    
        return () => {
          socket.off('connect', onConnect);
          socket.off('disconnect', onDisconnect);
          socket.off('foo', onFooEvent);
        };
      }, []);

  return <Container>
    {
      publicChatRoomData &&
       <><ChatHeader  chatRoomData={publicChatRoomData}/>
    <ChatDisplay userData={userData} chatRoomData={publicChatRoomData}/>
</> 
}
{/* <div style={{flexGrow:1}}></div> */}
    <UserInput />
  </Container>;
};

export default PublicChat;

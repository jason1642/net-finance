import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRoomMessages } from '../api-requests/chat-room-requests';
import ChatDisplay from '../components/chat-room/ChatDisplay';
import ChatHeader from '../components/chat-room/Header';
import UserInput from '../components/chat-room/UserInput';
import { userApi } from "../redux/features/userApi";
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { SocketData, ClientToServerEvents, ServerToClientEvents, InterServerEvents } from '../types/socket-io-types';
import { connect } from 'http2';

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
    // const socket: Socket<ServerToClientEvents, ClientToServerEvents>  = io('https://localhost:7108/chat', { transports: ["websocket"] } )

    const {data: userData} = userApi.endpoints.verifyUser.useQueryState()
    const [publicChatRoomData, setPublicChatRoomData]= React.useState<Array<any>>()
    // const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>()
    // const [isConnected, setIsConnected] = useState(socket?.connected) 
    const { sendMessage, lastMessage, readyState } = useWebSocket('wss://0.0.0.0:8080/');
    
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
      }[readyState];

    useEffect(() => {
        // var HOST = window.location.origin.replace(/^http/, 'ws')
        // const newSocket: Socket<ServerToClientEvents, ClientToServerEvents>  = io('http://127.0.0.1:7890', { transports: ["websocket"] } );
        // setSocket(newSocket);
        // console.log(newSocket)
        // return () => {
             
        //      socket?.close();
        // }
         
        
      }, [])
    
      useEffect(() => {
        console.log(readyState)
        console.log(connectionStatus)

      }, [readyState])


    // "undefined" means the URL will be computed from the `window.location` object
    // const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:44465'
    useEffect(()=>{
        // let newSocket: Socket<ServerToClientEvents, ClientToServerEvents>;
        getRoomMessages('641ddeb20052e8bc2b1edd6a').then(res=>{
            console.log(res.data)
            setPublicChatRoomData(res.data)
           
        })

    //     return () => {
    //         newSocket?.close();
    //         socket?.close();
    //    }
    },[])

    const onEmit = () => {
        // socket?.emit('New message') 
    }
//    useEffect(() => {
//         function onConnect() {
//           console.log('IS CONNECTED TO WEB SOCKET - PUBLIC CHAT')
//           setIsConnected(true);
//         }
    
//         function onDisconnect() {
//           setIsConnected(false);
//         }
    
   
    
//         socket?.on('connect', onConnect);
//         socket?.on('disconnect', onDisconnect);
     
    
//         return () => {
//           socket?.off('connect', onConnect);
          
//           socket?.off('disconnect', onDisconnect);
//         };
//       }, []);


// useEffect(() => {
//     console.log(isConnected)
// }, [isConnected]);

  return <Container>
    {
      publicChatRoomData &&
       <><ChatHeader  chatRoomData={publicChatRoomData}/>
    <ChatDisplay userData={userData} chatRoomData={publicChatRoomData}/>
</> 
}
{/* <div style={{flexGrow:1}}></div> */}
<button onClick={onEmit}>Emit</button>
    <UserInput />
  </Container>;
};

export default PublicChat;
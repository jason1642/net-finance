import React, { useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { getRoomMessages } from '../api-requests/chat-room-requests';
import ChatDisplay from '../components/chat-room/ChatDisplay';
import ChatHeader from '../components/chat-room/Header';
import UserInput from '../components/chat-room/UserInput';
import { userApi } from "../redux/features/userApi";
import useWebSocket, {ReadyState} from 'react-use-websocket';
import {WebSocketContext} from '../context/PublicChatWebSocket'
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
// const WS_URL = 'wss://localhost:7108/';

const PublicChat: React.FunctionComponent<IPublicChatProps> = ({}) => {
    // const socket: Socket<ServerToClientEvents, ClientToServerEvents>  = io('https://localhost:7108/chat', { transports: ["websocket"] } )
    const { messageList, wsState, connectWs } = useContext(WebSocketContext);

    const {data: userData} = userApi.endpoints.verifyUser.useQueryState()
    const [publicChatRoomData, setPublicChatRoomData]= React.useState<Array<any>>()
    const [socket, setSocket] = useState<any>()
    


    useEffect(() => {
        console.log('this is the message list', messageList, )
        console.log('This is the web socket state', wsState)
    }, [messageList, wsState]);
    //   useEffect(() => {
    //     const ws = new WebSocket(WS_URL)
    //     ws.onopen = () => {
    //         console.log('Connected to WebSocket server');
    //       };
    //       ws.onerror = () => {
    //         console.log('ON ERROR EVENt');
    //       };
    //     setSocket(ws)
    //     console.log(ws)

    //   }, [])
    //   useEffect(() => {
    //     console.log(socket)
    //   }, [socket]);   

    // "undefined" means the URL will be computed from the `window.location` object
    // const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:44465'
    useEffect(()=>{
        // let newSocket: Socket<ServerToClientEvents, ClientToServerEvents>;
        getRoomMessages('641ddeb20052e8bc2b1edd6a').then(res=>{
            console.log(res.data)
            setPublicChatRoomData(res.data)
            connectWs()

        })


    },[])

    const onEmit = () => {
        socket.send('Hello, server!');
    }




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
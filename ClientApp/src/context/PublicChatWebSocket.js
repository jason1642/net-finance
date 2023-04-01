/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { BaseConfig } from '../config/AppConfig';

const WebSocketContext = React.createContext();
const WebSocketConsumer = WebSocketContext.Consumer;

function WebSocketProvider({ children }) {
  const [wsState, setWsState] = useState(BaseConfig.webSocketState.NOTCONNECTED);
  const [newMessagesList, setNewMessagesList] = useState([]);

  const wsRef = useRef();

  // start web socket connection in this function
  const connectWs = () => {
    setWsState(BaseConfig.webSocketState.CONNECTING);

    wsRef.current = new WebSocket(BaseConfig.wssUrl);
    wsRef.current.onopen = () => {
      console.log('socket open');
      setWsState(BaseConfig.webSocketState.OPEN);

      // wsRef.current.send('')
    };

    wsRef.current.onmessage = e => {
            console.log(JSON.parse(e.data));

      
      
      switch(JSON.parse(e.data).type){
        case 'public chat message': 
            console.log('recieving message: ', JSON.parse(e.data).message);

            setNewMessagesList(prev=>[...prev, JSON.parse(e.data)])
            break;
        // case ''
        default: 
          break;
        
      }



    }; 

    // wsRef.current.addEventListener()

    wsRef.current.onclose = () => {
      console.log('socket closed by server');
      setWsState(BaseConfig.webSocketState.CLOSED);
      
    };
  };


  const closeWs = () => {
    wsRef.current.close();
    console.log('socket closed by client');
    setWsState(BaseConfig.webSocketState.CLOSED);
  };

  return (
    <WebSocketContext.Provider value={{ connectWs, closeWs, wsState, newMessagesList }}>
      {children}
    </WebSocketContext.Provider>
  ); 
}

WebSocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WebSocketContext, WebSocketConsumer, WebSocketProvider };
import axios from 'axios'
// import { Message } from 'react-hook-form'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ?
    'https://netfinance.azurewebsites.net/api/chatroom' 
    :'https://localhost:7108/api/chatroom',
    withCredentials: true,
})



export const getRoomMessages = async(roomId:string)=> 
    await api.get(roomId).then(res=>{
        console.log(res)
        return res
    }, err=> {
        console.error(err)
        return err
    })




interface MessageDataTypes { 
    sender_id: string;
    message: string;
    room_id: string;
}
export const sendChatRoomMessage = async(data: MessageDataTypes) => 
    await api.post('/message', data).then(res=>{
        console.log(res)
        return res
    }, err=> {
        console.error(err)
        return err
    })
 
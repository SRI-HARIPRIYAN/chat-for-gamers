import {useSocketContext} from '../Contexts/SocketContext.jsx'
import useConversation from '../store/useConversation'
import React, { useEffect } from 'react'
import notification from '../assets/sound/notification.mp3'
const useListenMessages = (() => {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useConversation();
    useEffect(()=>{
        socket?.on('newMessage',(newMessage)=>{
            newMessage.shouldShake = true;
            const sound = new Audio(notification);
            sound.play();
            setMessages([...messages,newMessage])
        })

        return ()=> socket.off("newMessage")
    },[socket,setMessages,messages])

})

export default useListenMessages;
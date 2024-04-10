import { LuSendHorizonal } from "react-icons/lu";
import useSendMessage from '../../hooks/useSendMessage';
import { useState } from 'react';
const MessageInput = () =>{
    const [message,setMessage] = useState("")
    const {loading,sendMessage}=useSendMessage();

    const handleSubmit  = async(e)=>{
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");

    }

    return (
        <form className="send--message" onSubmit={handleSubmit}>
            <input className="send-message--input" type="text" id="send-message" placeholder="Type your message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button className="send-message--button" disabled={loading}>
                {loading?<div className='loading-spinner--send-message'></div>:<LuSendHorizonal />}
                
            </button>
        </form>
    )
}

export default MessageInput;
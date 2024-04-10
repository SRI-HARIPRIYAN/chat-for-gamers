import { useEffect } from "react";

import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../store/useConversation";
import {useAuthContext} from "../../Contexts/AuthContext";

const MessageContainer = () => {
    
    const {selectedConversation,setSelectedConversation}=useConversation();
    useEffect(()=>{
        //cleanup function to unmount the selected conversation
        return ()=> setSelectedConversation(null);
    },[setSelectedConversation])
    return(
        
        <div className="MessageContainer">
             
                {!selectedConversation?<NoChatSelected/>:(
                <>
               <div className="container--head">
                <p>To:  <span className="container--receiverName">{selectedConversation.fullName}</span></p>
                
                </div>
                <Messages />
                <MessageInput />
                </>
                )}
            
        </div>
    )
}
export default MessageContainer;

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return(
        <>
            <div className="emptymsg--container">
                <p>Welcome {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
            </div>
        </>
    )
}


//STARTER CODE
/* import Messages from "./Messages";
import { BsSend } from "react-icons/bs";
const MessageContainer = () => {
    return(
        <div className="MessageContainer">
            <div className="container--head">
                <p>To:  <span className="container--receiverName">{"username"}</span></p>
            </div>
            <Messages />
            <form className="send--message">
                <input className="send-message--input" type="text" placeholder="type your message" />
                <button className="send-message--button">
                    <BsSend c/>
                </button>
            </form>
        </div>
    )
}
export default MessageContainer; */
import { useSocketContext } from "../../Contexts/SocketContext";
import useConversation from "../../store/useConversation";

const Conversation = ({conversation,lastIdx,emoji})=>{
    const {selectedConversation,setSelectedConversation} = useConversation();
    const {onlineUsers} = useSocketContext();
    const isSelected = selectedConversation?._id === conversation._id;
    const isOnline = onlineUsers.includes(conversation._id)
    return(
       <>
        <div className={`conversation--box  ${isSelected?"selected-conversation":""}`} onClick={()=>setSelectedConversation(conversation)}>
            <div className="conversation--profile">
                <div className="conversation-profile-icon">
                    <img src={conversation.profilePic} alt="user avatar" width="30px" />
                    <span className={`${isOnline?"online":"offline"}`}></span>
                </div>
                <p className="conversation-username">{conversation.fullName}</p>
                
            </div>
            <div className="conversation-box--emoji">
                {emoji}
            </div>
            
        </div>
        {!lastIdx && <div className="divider"></div>}
        </>
    )
}

export default Conversation;

//STARTER CODE
/* import { CgProfile } from "react-icons/cg";
const Conversation = ()=>{
    return(
        <div className="conversation--box">
            <div className="conversation--profile">
                <div className="conversation-profile-icon">
                    <CgProfile /> 
                </div>
                <p>Username</p>
            </div>
            <div className="conversation-box--emoji">
                @
            </div>
        </div>
    )
}

export default Conversation; */
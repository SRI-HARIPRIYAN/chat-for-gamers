import useConversation from "../../store/useConversation";
import {useAuthContext} from '../../Contexts/AuthContext.jsx'
import {extractTime} from '../../utils/extractTime.js'
const Message=({message}) =>{
    const {authUser}=useAuthContext();
    const {selectedConversation} = useConversation();

    const fromme = message.senderId === authUser._id;
    const chatClassName = fromme?"chat--sent":"chat--received";
    const profilePic = fromme? authUser.profilePic: selectedConversation.profilePic;
    
    const formattedTime = extractTime(message.createdAt)
    const shakeClass = message.shouldShake ?"shake":""

    return(
        <div className={`chat ${chatClassName} `}>
            <div className="chat--avatar">
                <img src={profilePic} alt="Profile image" width="30px"/>
            </div>
            <div className={`main--message ${shakeClass}`}>
                {message.message}
            </div>
            <span className="chat--timer">{formattedTime}</span>
        </div>
    )
}
export default Message









//STARTER CODE
/* const Message=(props) =>{
    return(
        <div className="chat chat--sent">
            <div className="chat--avatar">
                <img src="https://png.pngtree.com/png-clipart/20210915/ourmid/pngtree-user-avatar-placeholder-png-image_3918418.jpg" alt="Profile image" width="30px"/>
            </div>
            <div className="main--message">
                {"hi shree how are you doing?"}
            </div>
            <span className="chat--timer">19:00</span>
        </div>
    )
}
export default Message */
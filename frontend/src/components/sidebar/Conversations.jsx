import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversation";
import { getEmoji } from "../../utils/get.emoji";
const Conversations = () => {
    const {loading,conversations} = useGetConversations();
   
    return(
        <div className="conversations">
           {conversations.map((conversation,idx)=>(
            <Conversation 
                key={conversation._id}
                conversation={conversation}
                emoji={getEmoji()}
                lastIdx = {idx === conversations.length-1}   
            />
           ))}

            {loading?<span className="loading loading-spinner"></span>:null}
        </div>
    )
}

export default Conversations;


//STARTED CODE
/* import Conversation from "./Conversation";

const Conversations = () => {
    return(
        <div className="conversations">
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations; */
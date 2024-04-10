import { useEffect , useRef} from "react";

import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message"
import useListenMessages from "../../hooks/useListenMessages";

const Messages  = () =>{
    
    const {messages,loading}=useGetMessages();
    const lastMesssageRef = useRef();
    useListenMessages(); //to listen any event received to play a ringtone

    //to scroll the messages area to view the recent messages view
    useEffect(() => {
        setTimeout(() => {
            lastMesssageRef.current?.scrollIntoView({behavior:"smooth"})
        }, 20);
    },[messages])
    return(
        <div className="container-MessageBox">
            {!loading && messages.length > 0 && messages.map((message)=>
                (<div key={message._id} ref={lastMesssageRef}>
                    <Message  message = {message}/>
                </div>)    
            )}

            {loading && <div className="spinner-loading"></div>}
            {!loading && messages.length === 0 && <p className="emptymsg--container">Send a message to start conversation</p>}
        </div>
    )
}

export default Messages;

//STARTER CODE
/* import Message from "./Message"

const Messages  = () =>{
    return(
        <div className="container-MessageBox">
            <Message/>
            <Message name="received"/>
            <Message name="sent"/>
            <Message/>
            <Message/>
        </div>
    )
}

export default Messages; */
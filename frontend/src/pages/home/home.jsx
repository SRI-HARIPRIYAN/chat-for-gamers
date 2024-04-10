import MessageContainer from "../../components/messagecontainer/message.container";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
    return(
        <div className="home--contents">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home;
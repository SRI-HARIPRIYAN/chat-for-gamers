import Search from "./Search";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
    return(
        <div className="sidebar">
            <Search />
            <Conversations />
            <LogoutButton/>
        </div>
    )
}

export default Sidebar;
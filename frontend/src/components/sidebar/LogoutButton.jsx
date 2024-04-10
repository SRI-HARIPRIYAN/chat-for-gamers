import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton =() => {
    const {loading,logout}=useLogout();
    return(
        <>
            {!loading?(
                <button className="logout--button" onClick={logout}>
                    <BiLogOut  />
                </button>
            ):(
                <span className="loading loading-spinner"></span>
            )}
        </>
    )
}

export default LogoutButton;
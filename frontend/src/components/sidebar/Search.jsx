
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast'
import { useState } from "react";

import useConversation from '../../store/useConversation.js'
import useGetConversations from '../../hooks/useGetConversation.js'

const Search = () => {
    const [search,setSearch] = useState("");
    const {setSelectedConversation}= useConversation();
    const {conversations} = useGetConversations()


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!search) return;
        if(search.length < 3)
            return toast.error("Search term must be atleast 3 characters long")

        const conversation = conversations.find((c)=>c.fullName && c.fullName.toLowerCase().includes(search.toLowerCase()))
        if(conversation)
        {
            setSelectedConversation(conversation);
            setSearch('')
        }else{
            toast.error("No such user found")
        }
    }
    return(
        <div>
            <form className="home--searchbox" onSubmit={handleSubmit}>
                <div className="">
                    <input className="home-search--inputs" 
                        type="text" 
                        placeholder="Search..."
                        value={search}
                        id="search"
                        onChange={(e)=> setSearch(e.target.value)} />
                </div>
                <button className="searchIcon">
                    <FaSearch />
                </button>
            </form>
        </div>
    )
}

export default Search;
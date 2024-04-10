import {Link} from 'react-router-dom'
import { useState } from "react"
import useLogin from '../../hooks/useLogin'

const  Login= ()=> {
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const {loading,login} =useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(username,password);
    }
 return(
    <div className='login--box'>
        <div className="login--head">
            <i className='bx bx-conversation' ></i>
            <h2>Log in to C4G</h2>
        </div>
        <form onSubmit={handleSubmit} className="login--box">
            
            <div className="login--inputfields">
                <label htmlFor="userName">Username</label>
                <input  className="login-inputs" type="text" name="userName" id="userName" required autoComplete='on'
                value={username} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="login--inputfields">
                <label htmlFor="password">Password</label>
                <input className="login-inputs" type="password" name="password" id="password" required
                value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div className="login--signupdiv">
                <span>Dont have an account?</span>
                <Link to={"/signup"} >SignUp </Link>
            </div>
            <div className="login--buttonBlock">
                <button className="login-signup-button" disabled={loading}>
                    {loading?<span className='loading loading-spinner'>Loggin in...</span>:"Login"}
                </button>
            </div>
        </form>
    </div>

 )
 }
export default Login;
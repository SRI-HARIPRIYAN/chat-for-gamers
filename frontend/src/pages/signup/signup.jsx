import { useState } from 'react';
import {Link} from 'react-router-dom';
import Checkboxes from './genderCheckBoxes.jsx';
import useSignUp from '../../hooks/useSignUp.js';

const SignUp = () => {
    const [inputs,setInputs] = useState({
        fullName:"",
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    
    const {loading,signup}=useSignUp();

    const handleCheckBoxChange = (gender) => {
        setInputs({...inputs,gender})
    }

    const handleChange = (e)=> {
        setInputs(() => {
           return({...inputs,[e.target.name]:e.target.value})
        })
    }

    const handleSubmit =async (e) =>{
        e.preventDefault();
        await signup(inputs)
        
    }

    return(
        <div className='signup--box'>
            <div className="signup--head">
                    <i className='bx bx-conversation' ></i>
                    <h2>Welcome to C4G</h2>
                </div>
            <form onSubmit={handleSubmit} className="signup--box">
                
                <div className="inputfields">
                    <label htmlFor="fullName">Your Fullname</label>
                    <input  className="login-inputs" type="text" name="fullName" id="fullName" required autoComplete='on'
                    value={inputs.fullName} 
                    onChange={handleChange}
                    />
                </div>
                <div className="inputfields">
                    <label htmlFor="username">Username</label>
                    <input  className="login-inputs" type="text" name="username" id="username" required autoComplete='on'
                    value={inputs.username}
                    onChange={handleChange}/>
                </div>
                <div className="inputfields">
                    <label htmlFor="password">Password</label>
                    <input  className="login-inputs" type="password" name="password" id="password" required 
                    value={inputs.password}
                    onChange={handleChange}/>
                </div>
                <div className="inputfields">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input  className="login-inputs" type="password" name="confirmPassword" id="confirmPassword" required
                    value={inputs.confirmPassword}
                    onChange={handleChange}/>
                </div>
                <Checkboxes onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />
                <div>
                    <Link to={"/login"} className="signup--link" >Already have an account?</Link>
                </div>
                <div>
                    <button className="login-signup-button"
                    disabled={loading}>
                        {loading?<span className='loading'>Signing In...</span>:"Sign Up"}
                    </button>
                </div>

            </form>
        </div>
    )
}


export default SignUp;
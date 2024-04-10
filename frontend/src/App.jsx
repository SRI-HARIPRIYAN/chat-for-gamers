import { Navigate, Route,Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast'

import './App.css'
import Login from './pages/login/login.jsx'
import SignUp from './pages/signup/signup.jsx'
import Home from './pages/home/home.jsx'
import { useAuthContext } from './Contexts/AuthContext.jsx'

function App() {
  const {authUser} =useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to="/login"/>}/>
        <Route path="/login" element={authUser?<Navigate to="/"/>:<Login/>}/>
        <Route path="/signup" element={authUser?<Navigate to="/"/>:<SignUp/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App

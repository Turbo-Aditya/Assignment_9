import React, { useState } from "react";
import '../app.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [msg, setMsg] = useState('');

    const singIn = async (e) => {
        e.preventDefault();
        setMsg('');
        try {
            const response = await axios.post(`/user/signin`, 
            {email: email, password:pass} )
  if(response.data.user) {
    console.log("Logged in", response.data.user);
    navigate('/home');

  }


        } catch(err) {
            setMsg("User not found, enter correct login details");

        }
    }

return (
    <div className="login-container">
       <form onSubmit={singIn}>
        <h2>Sign In</h2>
        {msg && <p className="error-message">{msg}</p>}
        <label>Enter your Email</label>
        <input onChange={e => setEmail(e.target.value)}  type="email" placeholder="Enter your Email" />
        <label>Enter your password</label>
        <input onChange={e => setPass(e.target.value)} type="password" placeholder="Enter your Password" />
        <button type="submit">Sign In</button>
       </form>
        
    </div>
    );

}

export default Login;
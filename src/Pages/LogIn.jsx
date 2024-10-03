import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import '../index.css'

export function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();


    return(
        <>
        <form style={{backgroundColor: "aliceblue", height: "90vh"}}>
        <div>

            <div>

          <h1>Log In</h1>

        <div className="input-container">

              <div className="input-field">
                <input type="text" 
                       placeholder="Email"  
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}
               />
             </div>

             <div className="input-field">
                <input type="text" 
                      placeholder="Password"  
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                />
             </div>

        </div>

             <div className="button-container">
                <button className="button" type="submit">Log In</button>
             </div>

             <div className="link-container">
                <br></br>
                   <p className="link">Don't have an account? <Link to="/Sign-up">Sign In here</Link></p>
            </div>
            </div>

        </div>
        </form>
        </>
    )
}
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { registerUser, registerError } from '../App/userAction'

export function Create() {


const userState = useSelector(state => state.user);
const errorMessage = userState.error;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!USER_REGEX.test(name)) {
            alert('Invalid username');
            return;
        }

        if (!PWD_REGEX.test(password)) {
            alert('Your Password should have 8 characters with Numbers, Capital, and Typographical characters.');
            return;
        }

        axios.post('http://localhost:5000/register', { name, email, password })
            .then(response => {
                dispatch(registerUser({ name, email })); // Dispatching user registration action
                navigate('/home', { replace: true });
            })
            .catch(error => {
                console.error(error);
                dispatch(registerError(error.message)); // Dispatching error action
                setError(error.message);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>

                    <div>

                        <h1>Register</h1>

                        <input type="text" 
                               placeholder="Name" 
                               value={name} 
                               onChange={(e) => setName(e.target.value)}
                         />

                        <input type="text" 
                               placeholder="Email" 
                               value={email} 
                               onChange={(e) => setEmail(e.target.value)}
                          />

                        <input type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                          />

                        <input type="password" 
                               placeholder="Confirm Password" 
                               value={confirmPassword} 
                               onChange={(e) => setConfirmPassword(e.target.value)}
                         />

                        <button type="submit" style={{ backgroundColor: "violet", height: "40px", width: "60px" }}>Submit</button>

                        <br />
                        <p>Already have an account? <Link to="/log-in">Login here</Link></p>

                    </div>
                </div>
            </form>
        </>
    );
}

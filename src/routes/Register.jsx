import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { auth, createUserWithEmailAndPassword } from '../firebase'

function Register(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Registration successful", user);
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Registration error", errorCode, errorMessage);
                alert("Registration failed. Please try again.");
            });
    }

    return(
        <>
            <Header />
            <article>
                <div className="form__register--primary">
                    <form onSubmit={handleRegister}>
                        <h2>Register</h2>
                        <div>
                            <input type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required></input>
                            <input type='text' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                            <input type='email' placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </article>
            <Footer />
        </>
    )
}

export default Register
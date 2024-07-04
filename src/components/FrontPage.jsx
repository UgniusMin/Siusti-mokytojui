import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Login successful", user);
                navigate('/MainPage');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Login error", errorCode, errorMessage);
                alert("Login failed. Please try again.");
            });
    }

    return (
        <>
            <main>
                <article>
                    <div className="form__login--primary">
                        <form onSubmit={handleSubmitLogin}>
                            <h2>Login</h2>
                            <div>
                                <input type='text' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Login;
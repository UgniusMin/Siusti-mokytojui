import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        const LoginSuccessful = true;

        if(LoginSuccessful){
            setIsLoggedIn = true;
            navigate('/mainPage');
        } else {
            alert("Login failed. Please try again")
        }
    }

    return(
        <>
            <Header />
            <article>
                <div className="form__login--primary">
                    <form>
                        <h2>Login</h2>
                        <div>
                            <input placeholder="Username" required></input>
                            <input placeholder="Password" required></input>
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </form>
                </div>
            </article>
            <Footer />
        </>
    )
}

export default Login
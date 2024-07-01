import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Register(){
    return(
        <>
            <Header />
            <article>
                <div className="form__register--primary">
                    <form>
                        <h2>Register</h2>
                        <div>
                            <input placeholder="Username" required></input>
                            <input placeholder="Password" required></input>
                            <input placeholder="Email Address" required></input>
                            <button><Link to='/mainPage'>Register</Link></button>
                        </div>
                    </form>
                </div>
            </article>
            <Footer />
        </>
    )
}

export default Register
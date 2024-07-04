import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <nav className="header__nav--primary">
                <h1><Link to='/'>Holyday Photos</Link></h1>
                <button className="header__registerButton--primary"><Link to='/register'>Register</Link></button>
            </nav>
        </header>
    )
}

export default Header
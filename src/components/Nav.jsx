import { Link } from "react-router-dom"
import "../pages--css/Nav.css"
function Nav() {
    return (
        <nav className="nav__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Nav
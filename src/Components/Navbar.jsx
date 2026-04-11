import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link className="navbar" to="/todos">
                Todo App
            </Link>
            <div>
                <Link className="btn" to="/todos">
                    Todos
                </Link>
                <Link className="btn" to="/contact">
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
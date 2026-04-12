import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <Link className="navbar-brand" to="/todos">
          Task List
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
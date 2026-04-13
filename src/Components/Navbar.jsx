import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
      <nav className="navbar-a">
        <Link className="navbar-task" to="/todos">
          Task List
        </Link>
        <div>
          <Link className="btn-nav" to="/todos">
            Todos
          </Link>
          <Link className="btn-nav" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    );
}

export default Navbar;
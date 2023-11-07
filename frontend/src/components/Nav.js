import { Link } from "React-router-dom";

function Nav()
{
    return (
        <nav class="navbar">
            <Link to="/" class="navbar-brand">CRUD Operations</Link>
            <div class="nav">
                <Link to="/create-book" class="nav-link">Create Book</Link>
                <Link to="/book-log" class="nav-link">Book Log</Link>
            </div>
        </nav>
    )
}

export default Nav;
import { Link, NavLink } from "react-router-dom";

export function Navbar(){
    return(
    <nav style={{backgroundColor: "lightgray"}}>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>

        <NavLink to="/" className={({isActive}) => isActive ? "selected" : ""}>
            HomePageSelected
        </NavLink>
        </ul>
    </nav>
    );
}
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Brand/Logo Text */}
                <div className="navbar-brand">
                    <span className="brand-text">React Bits</span>
                </div>

                {/* Navigation Links */}
                <div className="navbar-links">
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/projects" className="nav-link">
                        My Work
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        About me
                    </NavLink>
                    <NavLink to="/stack" className="nav-link">
                        Stack
                    </NavLink>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </div>
            </div>  
        </nav>
    );
}

export default Navbar;
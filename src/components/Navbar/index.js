import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => {
        setClick(false);
    };

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <>
            <div className="Nav">
                <div className="justin">Justin</div>

                <Link to="/" className="navbar-logo"></Link>
                <div className="Bars" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Intrest
                        </Link>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Education
                        </Link>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Skills
                        </Link>
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

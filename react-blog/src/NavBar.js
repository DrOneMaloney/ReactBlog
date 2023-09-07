// NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav-header">
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-buttons">
                        <i className="material-icons">home</i>
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="nav-buttons">Projects</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-buttons">About Me</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;

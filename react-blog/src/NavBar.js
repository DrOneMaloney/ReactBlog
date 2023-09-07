import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";



function NavBar() {
    return (
        
        <nav className="nav-header">
            <ul className="nav-list">
                <button className="nav-buttons">
                    <li><Link to="/" className="nav-buttons">Home</Link></li>                
                </button>
                <button className="nav-buttons">
                    <li><Link to="/projects" className="nav-buttons">Projects</Link></li>
                </button>
                <button className="nav-buttons">
                    <li><Link to="/about" className="nav-buttons">About Me</Link></li>
                </button>
                <button>
                    <i className="material-icons">notifications</i>
                </button>
            </ul>
        </nav>
    );
}

export default NavBar;
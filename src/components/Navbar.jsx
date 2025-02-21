// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Header from "./Header";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar-container">
            {/* Desktop Navbar */}
            <div className="Navbar">
                <p className="headIn"><Header /></p>
                <div className="row3">
                    <Link className="HomeLink" to="/">HOME</Link>
                    <Link className="HomeLink" to="/about">ABOUT</Link>
                    <Link className="HomeLink" to="/contact">CONTACT</Link>
                    <Link className="HomeLink" to="/resume">RESUME</Link>
                    <Link className="HomeLink" to="/projects">PROJECTS</Link>
                    <Link className="HomeLink" to="/gallery">GALLERY</Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="mobileNavbar">
                <p className="headIn"><Header /></p>
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                    ☰
                </button>
                <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
                    <Link className="HomeLink" to="/" onClick={toggleMobileMenu}>HOME</Link>
                    <Link className="HomeLink" to="/about" onClick={toggleMobileMenu}>ABOUT</Link>
                    <Link className="HomeLink" to="/contact" onClick={toggleMobileMenu}>CONTACT</Link>
                    <Link className="HomeLink" to="/resume" onClick={toggleMobileMenu}>RESUME</Link>
                    <Link className="HomeLink" to="/projects" onClick={toggleMobileMenu}>PROJECTS</Link>
                    <Link className="HomeLink" to="/gallery" onClick={toggleMobileMenu}>GALLERY</Link>
                </div>
            </div>
        </div>
    );
}

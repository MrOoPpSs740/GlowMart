import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import {navLinks} from "../../data/content";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (<header className="header glass">
        <div className="header-inner">
            <div className="logo">
                <Link to="/">Glow<span>Mart</span>
                </Link>
            </div>

            <nav className={
                `nav ${
                    menuOpen ? "open" : ""
                }`
            }> {
                navLinks.map((link, idx) => (<Link key={idx}
                    to={
                        link.path
                    }
                    onClick={
                        () => setMenuOpen(false)
                    }
                    className={
                        link.name === "Cart" ? "cart-link" : ""
                }> {
                    link.name === "Cart" ? <FaShoppingCart size={20}/> : link.name
                } </Link>))
            } </nav>

            <div className={
                    `hamburger ${
                        menuOpen ? "active" : ""
                    }`
                }
                onClick={
                    () => setMenuOpen(!menuOpen)
            }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>);
};

export default Header;

import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({ toggle, isOpen }) {
    return (
        <nav className="navbar-container">
            <a href="/" className="navbar-logo"><img src="/favicon.ico" alt="logo" /> </a>
            <div className={isOpen ? "navbar-items navbar-open" : "navbar-items navbar-closed"}>
                <ul>
                    <li><Link onClick={() => toggle()} to="/reserva">Reserva</Link></li>
                    <li><Link onClick={() => toggle()} to="/contacto">Contacto</Link></li>
                    <li><Link onClick={() => toggle()} to="/sobre-mi">Sobre mi</Link></li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={() => toggle()}>
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar

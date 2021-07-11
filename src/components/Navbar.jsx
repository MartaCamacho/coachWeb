import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({ toggle, isOpen }) {
    return (
        <nav className="navbar-container">
            <div className={isOpen ? "navbar-items navbar-open" : "navbar-items navbar-closed"}>
                <ul>
                    <li><Link to="#inicio">Inicio</Link></li>
                    <li><Link to="#coaching">Coaching</Link></li>
                    <li><Link to="#contacto">Contacto</Link></li>
                </ul>
            </div>
            <div className="navbar-toggle" onClick={() => toggle()}>
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar

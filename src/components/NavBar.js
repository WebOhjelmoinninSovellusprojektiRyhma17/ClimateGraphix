import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div class="container-fluid">
                <Link className='navbar-brand' to='/'>Title</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">N1</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/N2">N2</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/N3">N3</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/V1">V1</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
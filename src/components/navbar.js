import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <Link to="/"><img src={require('../img/logo.png')} height="45px" alt="bg" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"><i className="fas fa-film btn-icon"></i>Films<span className="sr-only">(current)</span><i className="fas fa-angle-down btn-icon"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Getflix Lovers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign In</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

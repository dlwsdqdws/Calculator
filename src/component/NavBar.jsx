import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Web</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/calculator">Calculator</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/login">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/register">Sign Up</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;

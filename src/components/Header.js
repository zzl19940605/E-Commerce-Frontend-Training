import React from 'react';
import {Link, NavLink} from "react-router-dom";
export const Header =()=>{
    //import React to use JSX
    return (
        /*semantic tag*/
        <header>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#" className="navbar-brand">React SPA</a>
                <ul className="navbar-nav nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add-product">Add Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/names">Names</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add-name">AddName</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
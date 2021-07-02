import React from 'react';
import logo from '../../logos/Group 1329.png'
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="container d-flex justify-content-between header-area">
           <img className="logo" src={logo} alt="" />
           <div className="nav-btn">
               <Link to="/">Home</Link>
               <Link to="#">Donation</Link>
               <Link to="#">Events</Link>
               <Link ro="#">Blog</Link>
                <Link to="/register">
                    <button  className="btn btn-primary">Register</button>
                </Link>
                <Link to="/admin">
                    <button className="btn btn-dark">Admin</button>
                </Link>
           </div>
        </div>
    );
};

export default Header;
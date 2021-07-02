import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import './Admin.css'
import UserInfo from '../UserInfo/UserInfo';
import user from '../../logos/users-alt 1.png'
import plus from '../../logos/plus 1.png'
import { Link } from 'react-router-dom';

const Admin = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allUsers")
        .then(res => res.json())
        .then( data => setUsers(data))
    }, [])

    return (
        <div className='container d-flex'>
            <div className="left-side col-md-2">
                <Link to="/">
                    <img className="logo-img" src={logo} alt="" />
                </Link>
                <p className="blue-text"> <img className="user-logo" src={user} alt="" /> Volunteer register list</p>
                    <p className="bold-text"> <img className="plus-icon" src={plus} alt="" /> Add event</p>
            </div>
            <div className="col-md-10 right-side">
                <h4 className="bold-text">Volunteer register list</h4>
                <div>
                    <div className="title-row">
                        <span className="span-title">Name</span>
                        <span className="span-title">Email ID</span>
                        <span className="span-title">Registratin Date</span>
                        <span className="span-title">Volunteer list</span>
                        <span className="span-title">Action</span>
                    </div>
                    <div>

                        {
                            users.map(user => <UserInfo user={user}></UserInfo>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import TaskCard from '../TaskCard/TaskCard';
import logo from  '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import './UserTasks.css'

const UserTasks = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/regUser/${loggedInUser.email}`)
        .then( res => res.json())
        .then( data => setUserData(data))
    } , [])
    console.log(userData)
    return (
        <div className="container">
            <div className="d-flex justify-content-between header-area">
                <img className="logo" src={logo} alt="" />
                <div className="nav-btn d-flex">
                    <Link to="/">Home</Link>
                    <Link to="#">Donation</Link>
                    <Link to="#">Events</Link>
                    <Link to="#">Blog</Link>
                    <h6 className="nav-name">{loggedInUser.name}</h6>
                    </div>
            </div>

            <div className="task-card-area d-flex flex-wrap ">
                {
                    userData.map(data => <TaskCard data={data}></TaskCard> )
                }
            </div>
        </div>
    );
};

export default UserTasks;
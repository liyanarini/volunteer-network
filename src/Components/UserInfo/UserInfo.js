import React from 'react';
import './UserInfo.css'
import trash from '../../logos/trash-2 9.png'

const UserInfo = ({user}) => {

    const cancelReg = (e, id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( result => {
            if(result){
                alert('This task has been removed')
                e.target.parentNode.style.display = 'none';
                console.log('removed')

            } 
        })
    }

    return (
        <div className="user-row col"> 
                {/* <span className="user-name">{user.name}</span>
                <span className="user-name">{user.email}</span>
                <span className="user-name">{new Date (user.taskDetails.date).toDateString('mediumDate')}</span>
                <span className="user-name">{user.taskDetails.title}</span>
                <span>delete</span> */}

                <p className="user-name">{user.name}</p>
                <p className="user-name">{user.email}</p>
                <p className="user-name">{new Date (user.taskDetails.date).toDateString('mediumDate')}</p>
                <p className="user-name">{user.taskDetails.title}</p>
                <img onClick={ (e) => cancelReg(e, `${user._id}`)} className="trash-img" src={trash} alt="" />

        </div>
    );
};

export default UserInfo;
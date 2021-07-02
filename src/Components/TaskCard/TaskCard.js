import React from 'react';
import { useHistory } from 'react-router-dom';
import './TaskCard.css'

const TaskCard = ({data}) => {

    const cancelReg = (e, id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( result => {
            if(result){
                alert('This task has been removed')
                e.target.parentNode.parentNode.style.display = 'none';
                document.getElementById('card').style.display = 'none';
                console.log('removed')

            } 
        })
    }

    return (
        <div className="reg-card d-flex col-md-5" id="card">
            <div className='col-md-5'>
                <img src={data.photo} alt="" />
            </div>
            <div className='col-md-7 text-left'>
                <h4>{data.taskDetails.title}</h4>
                <h5>{new Date (data.taskDetails.date).toDateString('mediumDate')}</h5>
                <button onClick = { (e) => cancelReg(e, `${data._id}`)} className="cancel-btn">Cancel</button>
            </div>
        </div>
    );
};

export default TaskCard;
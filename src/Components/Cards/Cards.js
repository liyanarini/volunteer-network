import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img from '../../images/foodCharity.png'
import './Cards.css'

const Cards = ({task}) => {
    console.log(task)
    return (
        <div>
            <div class="card" id="card-area">
              <img src={img} alt="" />
                <div class="card-body">
                    <h6 class="card-text">{task.name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Cards;
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import img from '../../images/foodCharity.png'
import './Cards.css'
import {Link} from "react-router-dom";

const Cards = ({task}) => {
    return (
        <div className="col-md-6 col-lg-3">
          <Link to={`/register/${task.key}`}>
                <div id="card-area">
                     <img src={require(`../../images/${task.img}`).default} alt="" />
                     <h5 class="card-text">{task.name}</h5>
                </div>
          </Link>
            
        </div>
    );
};

export default Cards;
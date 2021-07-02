import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then( data => setTasks(data))
    }, [])
    return (
        <div className='home-page'>
            <div className="header-part">
                <Header></Header>
                <h2 className="header-line">I GROW BY HELPING PEOPLE IN NEED</h2>
                <form class="form-inline">
                    <input className="search-input" placeholder="Search..." aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
            <div className="task-area d-flex flex-wrap container">
                {
                    tasks.map(task => <Cards task={task}></Cards>)
                }
            </div>
            
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
        .then(res => res.json())
        .then( data => setTasks(data))
    }, [])
    return (
        <div>
            <Header></Header>
            {
                tasks.map(task => <Cards task={task}></Cards>)
            }
        </div>
    );
};

export default Home;
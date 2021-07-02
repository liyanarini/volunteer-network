import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'
import { useHistory, useParams } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(watch("example"));

    
    let {key} = useParams()
    const history = useHistory()


    const [task, setTask] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/task/${key}`)
        .then(res => res.json())
        .then( data => setTask(data[0]))
    }, [])

    const onSubmit = (data , e) => {
        console.log("form submitted" ,data);
        const userDetails = {...loggedInUser, taskDetails : data, regTime: new Date()}


        fetch('http://localhost:5000/regUser', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(res => {
           return res.json()
        })
        .then(data => {
            if(data){
                alert('You registered sucessfully!')
                
            }
        })

        e.preventDefault();
        history.push('/registeredTasks')
    }

    
    return (
        <div className="reg-page text-center">
         <img className="login-logo" src={logo} alt="" />
        <div className="reg-form">
            <h3 className="reg-header">Register as a Volunteer</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <input defaultValue={loggedInUser.name} placeholder="Full Name" {...register("name", { required: true })} />
            {errors.name && <span className='error'>Full name is required</span>}

            <input defaultValue={loggedInUser.email} placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <span className='error'>Email is required</span>}

            <input placeholder="Date" type="date" {...register("date", { required: true })} />
            {errors.date && <span className='error'>Date is required</span>}

            <input placeholder="Description" type="text" {...register("description", { required: true })} />
            {errors.description && <span className='error'>Description is required</span>}

            {
            key?  
            <input defaultValue={task.name} placeholder="Task Title" {...register("title", { required: true })} /> :
            <input placeholder="Task Title" {...register("title", { required: true })} />
            }
            
            <input  className="submit-btn" type="submit" />
            </form>
        </div>
        </div>
    );
};


export default Register;
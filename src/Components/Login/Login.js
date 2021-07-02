import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png'
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig.js'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName,email, photoURL} = res.user
            const signedInUser = {
                isSignedIn : true,
                name : displayName,
                email : email,
                photo : photoURL
            }
            setLoggedInUser(signedInUser)
            history.replace(from);
        })
    }
   
    return (
        <div className="container login-area">
            <img className="login-logo" src={logo} alt="" />
            <div className="login-box text-center">
                <h3>Login With</h3>
                <div onClick={handleGoogleSignIn} class="google-btn d-flex justify-content-between">
                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    <p className="btn-text">Continue with google</p>
                </div>
                <div className="d-flex login-text">
                  <p>Don't have an account?</p>
                  <a href="#">Create an account</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
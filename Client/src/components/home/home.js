import React from 'react';
import './home.css'
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export default function Home(){

    function login(){
        let username = document.getElementById("user").value;
        let password = document.getElementById("pass").value;
        Axios.post("http://localhost:3001/api/newuser", {
            id: 1, 
            })
    }

    return(
        <div className="log-form">
            <h2 className="loginheader">Login to your account</h2>
            <form>
                <input id = "user" type="text" title="username" placeholder="username" />
                <input id = "pass" type="text" title="password" placeholder="password" />
                <Link to="/store" onClick={login} className="submit" type="submit">Login</Link>
            </form>
        </div>
    )}
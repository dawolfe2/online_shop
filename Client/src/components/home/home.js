import React from 'react';
import './home.css'
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import Header from '../Header.js'

export default class Home extends React.Component{
 
    state ={
        id: 1,
        username: "",
        password: "",
        total: 0
      }

    login(){
        var self = this;
        let username = document.getElementById("user").value;
        let password = document.getElementById("pass").value;
        Axios.post("http://localhost:3001/api/checkuser", {
            username: username, 
            password: password,
            }).then(function(response){
            if(response.data.id && response.data.id > 1){
                self.setState({username : username})
                self.setState({password : password})
                Header.state.username = username
            }
            else{
                Axios.post("http://localhost:3001/api/newsuer", {
                    username: username, 
                    password: password,
                }).then(function(response){
                    self.setState({username : username})
                    self.setState({password : password})
                    Header.state.username = username
                })
        }
    })}

    render(){
    return(
        <div className="log-form">
            <h2 className="loginheader">Login to your account</h2>
            <div className="form">
                <input id = "user" type="text" title="username" placeholder="username" />
                <input id = "pass" type="text" title="password" placeholder="password" />
                <button onClick={this.login} className="btn" type="submit">Login</button>
            </div>
        </div>
        )}
    }
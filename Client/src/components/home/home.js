import React from 'react';
import './home.css'
import Axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

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
                self.setState({id : response.data.id})
                self.setState({username : username})
                self.setState({password : password})
            }
            else{
                Axios.post("http://localhost:3001/api/newuser", {
                username: username, 
                password: password,
            }).then.then(function(response){
                self.setState({id : response.data.id})
                self.setState({username : username})
                self.setState({password : password})
            })
        }
    })}

    render(){
    return(
        <div className="log-form">
            <h2 className="loginheader">Login to your account</h2>
            <form>
                <input id = "user" type="text" title="username" placeholder="username" />
                <input id = "pass" type="text" title="password" placeholder="password" />
                <Link to="/store" onClick={this.login} className="submit" type="submit">Login</Link>
            </form>
        </div>
        )}
    }
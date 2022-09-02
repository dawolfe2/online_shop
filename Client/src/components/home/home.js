import React, { useEffect, useState } from 'react';
import './home.css'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Home(){
 
        let navigate = useNavigate();

        const [id, setId] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [total, setTotal] = useState("");
        const [loggedin, setLoggedin] = useState("");

        const [usernameReg, setUsernameReg] = useState("");
        const [passwordReg, setPasswordReg] = useState("");

        const [usernameLog, setUsernameLog] = useState("");
        const [passwordLog, setPasswordLog] = useState("");

        Axios.defaults.withCredentials = true;

      const login = () => {
        console.log("asdf")
        if(usernameLog.length > 0 && passwordLog.length > 0){
            // Axios.post("http://localhost:3001/api/login", { 
            Axios.post("https://6311515a70563b120d6c0d5f--astonishing-flan-9bd6a7.netlify.app/api/login", {   
                username: usernameLog, 
                password: passwordLog,
            }).then(function(response){
                if (response.data.message){
                    setLoggedin("Incorrect username or password.");
                }
                else{
                    setLoggedin("Logged In!");
                    setId(response.data[0].id);
                    setUsername(response.data[0].username);
                    setPassword(response.data[0].password);
                    setTotal(response.data[0].total);
                    navigate('/store');
                }
            })
        }
      }

     const register = () => {
        if(usernameReg.length > 0 && passwordReg.length > 0){
            // Axios.post("http://localhost:3001/api/register", {
            Axios.post("https://6311515a70563b120d6c0d5f--astonishing-flan-9bd6a7.netlify.app//api/register", {
                username: usernameReg, 
                password: passwordReg,
            })
        }
        else{
            setLoggedin("Invalid username and password");
        }
        
    }

    // useEffect(()=> {
    //     // Axios.get("http://localhost:3001/api/login").then((response)=>{
    //         Axios.get("https://6311515a70563b120d6c0d5f--astonishing-flan-9bd6a7.netlify.app//api/login").then((response)=>{
    //         if(response.data.loggedIn == true){
    //             setLoggedin("Logged In");
    //         }
    //     })
    // }, [])

    return(
        <div className="log-form">
            <h2 className="loginheader">Login to your account</h2>
            <div className="form">
                <input id = "loguser" type="text" title="username" placeholder="username" onChange={(e) => {
                    setUsernameLog(e.target.value);
                }}/>
                <input id = "logpass" type="text" title="password" placeholder="password" onChange={(e) => {
                    setPasswordLog(e.target.value);
                }}/>
                <button onClick={login} className="btn" type="submit">Login</button>
            </div>
            <h2 className="loginheader">Register new account</h2>
            <div className="form">
                <input id = "reguser" type="text" title="username" placeholder="username" onChange={(e) => {
                    setUsernameReg(e.target.value);
                }}/>
                <input id = "regpass" type="text" title="password" placeholder="password" onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}/>
                <button onClick={register} className="btn" type="submit">Register</button>
            </div>
            <h2 className="logstatus">{loggedin}</h2>
        </div>
    )
}
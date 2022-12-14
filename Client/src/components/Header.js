import React from 'react';
import logo from '../images/D_logo.PNG'
import './Header.css'
import { Link } from 'react-router-dom';

export default class Header extends React.Component{

  state ={
    id: Math.floor(Math.random() * 10) + 1,
    username: "Dan",
    password: "asdf",
    total: 0
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     var self = this;
  //     // Axios.post("http://localhost:3001/api/total", {
  //     Axios.post("https://6311515a70563b120d6c0d5f--astonishing-flan-9bd6a7.netlify.app/api/total", {
  //       id: self.state.id, 
  //       }).then(function(response){
  //         let newtotal = parseFloat(response.data.total);
  //         self.setState({ total: newtotal})
  //       })}, 500);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render(){
    return(
        <div className="header">
          <img src={logo} className="headerlogo"></img>
          <h2 className="storename">Dan's Store</h2>
          <div className="navmenu">
            <p className="navlink">
              <Link to="/">Login</Link>
            </p>
            <p className="navlink">
              <Link to="/store">Shop</Link>
            </p>
            <p className="navlink">
              <Link to="/about">About</Link>
            </p>
          </div>
        </div>
    )
  }
}
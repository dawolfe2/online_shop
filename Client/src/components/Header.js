import React from 'react';
import logo from '../images/D_logo.PNG'
import './Header.css'
import Axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default class Header extends React.Component{

  state ={
    id: 1,
    username: "Dan",
    password: "",
    total: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      var self = this;
      Axios.post("http://localhost:3001/api/total", {
        id: this.state.id, 
        }).then(function(response){
          let newtotal = parseFloat(response.data.total);
          console.log(newtotal);
          self.setState({ total: newtotal})
        })}, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
        <div className="header">
          <img src={logo} className="headerlogo"></img>
          <h2 className="storename">Dan's Grocery Store</h2>
          <div className="navmenu">
            <p className="navlink">
              <Link to="/store">Shop</Link>
            </p>
            <p className="navlink">
              <Link to="/about">About</Link>
            </p>
            <p className="navlink">
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <h4 className="cart">Cart:</h4>
          <h4 className="total">${this.state.total}</h4>
        </div>
    )
  }
}
import React from 'react';
import logo from '../images/D_logo.PNG'
import './Header.css'
import { NavLink, NavMenu } 
    from "./NavbarElements";
import Axios from 'axios'

export default class Header extends React.Component{

  state ={
    username: "John",
    total: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ total: this.state.total }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return(
        <div className="header">
          <img src={logo} className="headerlogo"></img>
          <h2 className="storename">Grocery Store</h2>
            <NavMenu className="navmenu">
              <NavLink to="/Body" className="navlink">
                Shop
              </NavLink>
              <NavLink to="/about" className="navlink">
                About
              </NavLink>
              <NavLink to="/contact" className="navlink">
                Contact
              </NavLink>
            </NavMenu>
          <h4 className="cart">Cart:</h4>
          <h4 className="total">${this.state.total}</h4>
        </div>
    )
  }
}
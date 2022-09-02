import React, {useEffect, useReducer} from 'react';
import './Body.css'
import Item from './item.js'
import { Link } from 'react-router-dom';

//Create items for the shop, only need to add name of item and price and it will create a new html object

export default class Body extends React.Component{

  state={
    total: 0,
    checkouttext: ""
  }

  onAdd = (num) =>{
    this.setState({ total: (parseInt(this.state.total) + parseInt(num)) })
  }

  onSub = (num) =>{
    this.setState({ total: (parseInt(this.state.total) - parseInt(num)) })
  }

  checkout = () =>{
    const { navigation } = this.props;
    this.props.navigation.navigate('/thanks')
  }

  render(){
    return(
        <div className="MainBody">
          <div className="column">
            <Item Item="Apple" Price="1" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Banana" Price="2" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Peach" Price="4" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Lettuce" Price="3" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Celery" Price="2" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Broccoli" Price="2" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Cabbage" Price="5" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Grapes" Price="4" add={this.onAdd} sub={this.onSub}/>
          </div>
          <div className="column">
            <Item Item="Beef" Price="6" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Chicken" Price="5" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Steak" Price="6" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Milk" Price="2" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Tea" Price="2" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Coffee" Price="2" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Flour" Price="5" add={this.onAdd} sub={this.onSub}/>
            <Item Item="Bread" Price="4" add={this.onAdd} sub={this.onSub}/>
          </div>
          <div className="cart">
            <h2 className="total">Cart: ${this.state.total}</h2>
            <Link to="/thanks" className="checkout">Checkout</Link>
            <h2 className="thanks">{this.state.checkouttext}</h2>
          </div>
        </div>
    )
  }
}
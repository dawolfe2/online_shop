import React from 'react';
import './Body.css'
import Axios from 'axios'

//class for shopping item and calculations for quantity and price
//also has buttons for incrementing to cart

export default class Item extends React.Component{

    state ={
        id: 1,
        count: 0,
        total: 0
    }

    plus = () =>{

      this.setState({ count: (this.state.count + 1) })
      this.setState({ total: (parseInt(this.state.total) + parseInt(this.props.Price)) })
      Axios.post("http://localhost:3001/api/add", {
      id: 1, 
      cost: this.props.Price,
      }) 
    }
    
    minus = () =>{
        if(this.state.count!=0){
            this.setState({ count: (this.state.count - 1) })
            this.setState({ total: (parseInt(this.state.total) - parseInt(this.props.Price))})

            Axios.post("http://localhost:3001/api/subtract", {
            id: 1, 
            cost: this.props.Price,
      }) 
        }
    }

  render(){
    return(
      <div className= "item">
        <h4 className = "itemtext">{this.props.Item}: ${this.props.Price}</h4>
        <div className = 'btns'>
            <button onClick={this.plus} className="pos">+</button>
            <h1 className = "count">{this.state.count}</h1>
            <button onClick={this.minus} className="neg">-</button>
        </div>
        <h5 className = "totaltext">${this.state.total}</h5>
      </div>
    )
  }
}
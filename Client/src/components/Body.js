import React from 'react';
import './Body.css'
import Item from './item.js'

//Instructions items create items for the shop, only need to add name of item and price and it will create an html object

export default function Body(){
  return(
      <div className="Main">
            <h4 className="Instructions">Add or remove items from cart by clicking the buttons</h4>
            <Item Item="Apple" Price="1"/>
            <Item Item="Banana" Price="2"/>
            <Item Item="Steak" Price="4"/>
            <Item Item="Milk" Price="5"/>
      </div>
  )
}
import React from 'react';
import './Body.css'
import Item from './item.js'

//Create items for the shop, only need to add name of item and price and it will create a new html object

export default function Body(){
  return(
      <div className="MainBody">
        <div className="column">
          <Item Item="Apple" Price="1"/>
          <Item Item="Banana" Price="1"/>
          <Item Item="Peach" Price="4"/>
          <Item Item="Lettuce" Price="3"/>
          <Item Item="Celery" Price="2"/>
        </div>
        <div className="column">
          <Item Item="Beef" Price="6"/>
          <Item Item="Chicken" Price="5"/>
          <Item Item="Steak" Price="6"/>
          <Item Item="Milk" Price="2"/>
          <Item Item="Tea" Price="2"/>
        </div>
      </div>
  )
}
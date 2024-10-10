import React from 'react'
import "./Item.css"
import { NavLink } from 'react-router-dom'
const Items = (props) => {
  return (
    <div className="item">
      <NavLink to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></NavLink>
      <p>{props.name}</p>
      <div className="itemPrices">
        <div className="item-price-new">
         ${props.new_price}
        </div>
        <div className="item-price-old">
        ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
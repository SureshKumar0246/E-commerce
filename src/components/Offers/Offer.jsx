import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offer.css'
const Offer = () => {
  return (
    <div className="offers">
        <div className="offers_left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>check Now</button>
        </div>
        <div className="offers_right">
<img src={exclusive_image} alt="" />
        </div>
    </div>
)
}

export default Offer
import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
        <div className="descriptionBoxNavigator">
            <div className="description-nav-box">Description</div>
       <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionBox-description">
            <p>Ecommerce or "electronic commerce" is the trading of goods and services online. The internet allows individuals and businesses to buy and sell an increasing amount of physical goods, digital goods, and services electronically.</p>
            <p>E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These e-commerce transactions typically fall within four types: business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.</p>
        </div>
    </div>
  )
}

export default DescriptionBox
import React from 'react'
import "./Hero.css"
import hand_icon from '../Assets/hand_icon.png'
import arrow from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className="hero">
        <div className="heroLeft">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="handicons">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>collections</p>
        <div style={{display:"flex", gap:"10px"}}>

            <p>for </p>
            <p> everyone</p>
        </div>
        </div>
        <div className="heroLatestBtn">
            <div>Latest Collections</div>
            <img src={arrow} alt="" />
        </div>
        </div>
        <div className="heroRight">
        <img src={hero_image} alt="" />
        </div>
    </div>    
)
}

export default Hero
import React, { useContext } from 'react'
import "./NAvbar.css"
import logo from "./Assets/logo.png"
import cart_icon from "./Assets/cart_icon.png"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShopContext } from './Context/Context'
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    let {getTotalItem} = useContext(ShopContext)
  return (
    <div className='Navbar'>
        <div className="NavLogo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='Navmenu'>
    <li onClick={()=>setMenu("shop")}><NavLink to={"/"}> Shop {menu==="shop"?<hr/>:<></>}</NavLink></li>
    <li onClick={()=>setMenu("mens")}><NavLink to={"/mens"}> Mens {menu==="mens"?<hr/>:<></>} </NavLink></li>
    <li onClick={()=>setMenu("womens")}> <NavLink to={"/womens"}>Womens {menu==="womens"?<hr/>:<></>} </NavLink></li>
    <li onClick={()=>setMenu("kids")}> <NavLink to={"/kids"}>Kids {menu==="kids"?<hr/>:<></>}</NavLink></li>
        </ul>
        <div className="NAvLogincart">
            <button><NavLink to={"/login"}>Login</NavLink></button>
            <NavLink to={"/cart"}><img src={cart_icon} alt="" /></NavLink>
            <div className="navCartCpunt">{getTotalItem()}</div>
        </div>
    </div>
  )
}

export default Navbar
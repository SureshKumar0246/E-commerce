import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/Context'
import remove_icons from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    let {getTotalCartAmount, all_products, cartItems, removeFromCart} = useContext(ShopContext)

  return (
    <div className="cartItems">
<div className="cartiTemsFormatMain">
    <p>Product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr />
{all_products.map((e)=>{
    
    if(cartItems[e.id]>0){
        return <div>
        <div className="containerItemFormat cartiTemsFormatMain">
            <img src={e.image} alt="" className='CartIconProductIcon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cartname-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='cartIconRemoveIcon' src={remove_icons} onClick={()=>removeFromCart(e.id)} alt="" />
        </div>
        </div>
    }
    return null
})}
<div className="cartItemDown">
    <div className="cartItemTotal">
        <h1>cart Totals</h1>
        <div>
            <div className="cartItem-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
                
            </div>
            <hr />
            <div className="cartItem-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartItem-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartItemPromocode">
        <p>If you have a promocode, Enter it here-</p>
        <div className="cartItemPromoBox">
            <input type="text" placeholder='Promo code'/>
            <button>Submit</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default CartItems
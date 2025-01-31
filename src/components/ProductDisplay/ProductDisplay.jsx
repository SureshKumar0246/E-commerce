import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/Context';
const ProductDisplay = (props) => {
    let {product} = props
    let {addtoCart} = useContext(ShopContext)
    return (
    <div className="ProductDisplay">
        <div className="productdisplayLeft">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
               
                    <img className="productdisplaymain-image" src={product.image} alt="" />
               
            </div>
        </div>
        <div className="productdisplayright">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-price">
                <div className="productdisplay-oldprice">
                    ${product.old_price}
                </div>
                <div className="productdisplay-newprice">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere harum nihil reprehenderit, assumenda voluptatibus aspernatur ullam dolores nemo ea rerum ducimus ipsa?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productSizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>addtoCart(product.id)}>ADD TO CART</button>
            <p className='productdisplayright-category'><span>Category :</span> Women, T-Shirt, Crop-Top</p>
            <p className='productdisplayright-category'><span>Tags :</span> Modern Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
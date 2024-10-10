import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../components/Context/Context'
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import Items from '../components/Item/Items'

const ProductCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
<div className="shop-category">
  <img className='shopCategory-banner' src={props.banner} alt="" />
  <div className="shopCategoryIndexSort">
    <p><span>Showing 1-12</span> out of 36 products</p>
    <div className="shopCategorySort">
      Sort by <img src={dropdown_icon} alt="" />
    </div>
  </div>
  <div className="shopCategory-products">
    {all_products.map((item, i)=>{
      if(props.category === item.category){

        return <Items key={i} id={item.id} name={item.name } image={item.image} new_price={item.new_price} old_price={item.old_price} />
      }
      else{
        return null
      }
    })}
  </div>
  <div className="shopCategory-loadmore">
     Explore More
  </div>
</div>
  )
}

export default ProductCategory
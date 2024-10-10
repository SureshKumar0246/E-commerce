import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/Context'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedrProducts/RelatedProducts';
const Product = () => {
  const {all_products} = useContext(ShopContext)
  let {productId} = useParams()
  const product = all_products.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox></DescriptionBox>
      <RelatedProducts></RelatedProducts>
    </div>
  )
}

export default Product
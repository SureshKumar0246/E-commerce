import React from 'react'
import Hero from '../components/Hero/Hero'
import Polpular from '../components/Popular/Polpular'
import Offer from '../components/Offers/Offer'
import NewCollection from '../components/NewCollections/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
const Shop = () => {
  return (
    <div>
     <Hero></Hero>
     <Polpular></Polpular>
     <Offer></Offer>
     <NewCollection></NewCollection>
     
     <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop
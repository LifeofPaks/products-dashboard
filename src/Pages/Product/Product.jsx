import React from 'react'
import './Product.scss'
import Single from '../Single/Single'
import { singleProduct } from '../../Data/Data'


const Product = () => {
   // FETCH DATA AND PASS TO SINGLE COMPONENT
  return (
    <div className='product'>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product
import React, { useState } from 'react'
import data from '../assets/Products.json'
import { Product } from './Product'

export const Home = () => {
    const [products] = useState(data)
  return (
    <div className='product-container'>
        {products.map((product)=>(
            <Product key={product.id} product=
            {product}/>
        ))}
        </div>
  )
}

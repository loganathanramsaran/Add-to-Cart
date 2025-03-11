import React, { useState } from 'react'
import data from '../assets/Products.json'
import { Product } from './Product'

export const Home = ({cart, setCart}) => {
    const [products] = useState(data)
  return (
    <div className='product-container'>
      <div class="w-[100%]">
            <h1 class="pt-8 text-4xl text-center bg-[#e7dbef]"><span class="text-purple-950">Welcome</span> to Shop Cart </h1>
            <p class="pt-1 text-sm pb-8 text-gray-600 text-center bg-[#e7dbef]">Make it Perfect, <span class="text-gray-800">Choice is Yours!</span></p>
      </div>
        {products.map((product)=>(
            <Product key={product.id} product=
            {product} cart={cart} setCart={setCart}/>
        ))}
        </div>
  )
}

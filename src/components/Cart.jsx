import React, { useEffect, useState } from 'react'
import "./Cart.css"


export const Cart = ({cart}) => {

  const [total,setTotal] = useState(0);
  
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + parseInt(curr.price),0
  ));
},[cart]);

  return (
    <>
      <h1 className="text-2xl text-center w-screen pt-8">Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => {
          return (
            <div className="cart-product" key={product.id}>
              <div className="flex gap-7 items-center">
                <div className="img">
                  <img src={product.image} alt="image" />
                </div>
                <div className="cart-product-details">
                  <h3>{product.title}</h3>
                  <p> Rs: {product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="m-12 rounded-2xl p-2 bg-[#492258] text-white text-[20px]">Total Amount Rs: {total} only </h2>
    </>
  )
}

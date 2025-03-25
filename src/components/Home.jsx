import React, { useState } from "react";
import { Product } from "./Product";
import Footer from "./Footer";

export const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setProducts(json));

  return (
    <div className="product-container">
      <div className="w-screen">
        <h1 className="pt-8 text-4xl text-center bg-[#e7dbef]">
          <span className="text-purple-950">Welcome</span> to Shop Cart{" "}
        </h1>
        <p className="pt-1 text-sm pb-8 text-gray-600 text-center bg-[#e7dbef]">
          Make it Perfect,{" "}
          <span className="text-gray-800">Choice is Yours!</span>
        </p>
      </div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
      <>
      <Footer />
      </>
    </div>
  );
};

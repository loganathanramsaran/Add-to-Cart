import React, { useEffect, useState } from "react";
import "./Cart.css";
export const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price) * (quantities[curr.id] || 1), 0));
  }, [cart, quantities]);

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 1) - 1, 1),
    }));
  };

  return (
    <>
      <div className="text-2xl text-[#492258] w-screen mix-blend-exclusion sticky top-3  text-center my-8">Cart Products</div>

      <section className="cart-container p-10 border-t-2 border-gray-400 grid grid-cols-2 gap-7 max-md:grid-cols-1">
        <div className="cart-product-main flex flex-col gap-7 ">
          {cart.map((product) => {
            const quantity = quantities[product.id] || 1;
            return (
              <div className="cart-product flex gap-5 p-3 rounded-2xl shadow-xl justify-between bg-gray-50  " key={product.id}>
                <div className="flex gap-7 items-center">
                  <div className="img">
                    <img src={product.image} alt="image" />
                  </div>
                  <div className="cart-product-details">
                    <h3>{product.title}</h3>
                    <p>Rs: {product.price}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="btn px-3 text-white bg-red-500 rounded-md cursor-pointer hover:bg-red-600"
                  >
                    -
                  </button>
                  <div className="text-[#492258] rounded-full bg-white w-8 text-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="btn px-3 text-white bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="center-line border-l-6 border-gray-400"></div>

        <div className="total-amt flex justify-center fixed right-50 top-70 max-md:static max-lg:right-10">
          <div className="flex gap-5 py-5 justify-center h-full">
            <div className="flex flex-col items-end text-end gap-2">
              <p className="p-1 text-xl">Total Amount Details :</p>
              <p className="p-1 text-xl text-gray-700">Total Quantity :</p>
              <p className="p-1 text-2xl">Total Amount Rs :</p>
            </div>
            <div className="flex flex-col items-start gap-2 w-10">
              <p className="p-1 text-xl">{total}</p>
              <p className="p-1 text-xl text-red-500">
                {parseInt(total * 0.1)}
              </p>
              <p className="p-1 text-2xl text-green-800">
                {total - total * 0.1}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

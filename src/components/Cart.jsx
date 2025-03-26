import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
export const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + parseInt(curr.price) * (quantities[curr.id] || 1),
        0
      )
    );
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
      <div className="text-2xl text-[#492258] w-screen text-center my-7">
        Cart Products 
      </div>
      {
        cart.length === 0?(
          <div className=" flex flex-col items-center gap-7 p-10">
            <img className="w-60 " src="./src/assets/empty-cart.png" alt="" />
            <p className="text-center text-lg">Your Cart is Empty!</p>
              <p className="text-center text-[12px] -mt-3">Add Items to it Now.</p>
              <Link to={"/"}
                  className="text-sm bg-[#fb641b] px-5 py-2 rounded-sm hover:bg-[#492258] font-semibold text-white cursor-pointer"
                >
                  <i class="fa-solid fa-cart-shopping"></i> &nbsp; SHOP NOW
                </Link>
          </div>
        ):(
          <section className="cart-container p-10 border-t-2 max-md:w-screen border-gray-400 grid grid-cols-3 gap-7 max-md:grid-cols-1">
          <div className="cart-product-main col-span-2 overflow-y-scroll h-100 flex flex-col gap-10  ">
            {cart.map((product) => {
              const quantity = quantities[product.id] || 1;
              return (
                <div
                  className="cart-product flex gap-5 p-3 rounded-2xl shadow-lg mr-4 justify-between bg-gray-50 max-md:flex-col "
                  key={product.id}
                >
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
          <div className="total-amt flex justify-center fixed right-25 top-60 max-md:static max-lg:right-10 max-md:bg-green-200  max-md:border-t">
            <div className="flex gap-5 py-5 justify-center h-full">
              <div className="flex flex-col items-end text-end gap-2">
                <p className="p-1 text-xl max-sm:text-sm">
                  Total price :
                </p>
                <p className="p-1 text-xl max-sm:text-sm text-red-500">
                  Discount 10% :
                </p>
                <p className="p-1 text-2xl text-green-800 max-sm:text-xl">Total Amount Rs :</p>
              </div>
              <div className="flex flex-col items-start gap-2 w-10">
                <p className="p-1 text-xl max-sm:text-sm">{total}</p>
                <p className="p-1 text-xl max-sm:text-sm text-red-500">
                  -{parseInt(total * 0.1)}
                </p>
                <p className="p-1 text-2xl max-sm:text-xl text-green-800">
                  {total - total * 0.1}
                </p>
              </div>
            </div>
          </div>
        </section>
  

        )};

    </>
  );
};

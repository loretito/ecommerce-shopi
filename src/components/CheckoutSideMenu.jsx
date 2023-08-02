import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { OrderCard } from "./OrderCard";
import { totalPrice } from "../utils/totalPrice";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

export const CheckoutSideMenu = () => {
  const {
    cartProducts,
    checkoutSideMenu,
    closeCheckoutMenu,
    count,
    setCount,
    setOrder,
    setCartProducts,
  } = useContext(ShoppingContext);
  const total = totalPrice(cartProducts);

  const navigate = useNavigate();

  const handleCheckout = () => {
    const orderToAdd = {
      id: v4(),
      date: new Date(),
      products: cartProducts,
      totalProducts: count,
      totalPrice: total,
    };

    setOrder(prevState => [ orderToAdd,...prevState]);
    setCount(0);
    setCartProducts([]);
    closeCheckoutMenu()
    navigate("/my-orders/last");
  };

  return (
    <aside
      className={`${
        !checkoutSideMenu && "hidden"
      } w-[360px] flex flex-col fixed right-0 bg-white border-gray-200 border-l-2 h-[calc(100vh-72px)] top-[72px] py-6 pr-0 pl-6`}
    >
      <div className="flex justify-between items-center mb-3 ">
        <h2 className="font-semibold text-xl text-green-600">My Order</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:cursor-pointer"
          onClick={closeCheckoutMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="overflow-auto pb-20 custom-scrollbar">
        {cartProducts.map((product, index) => (
          <OrderCard key={index} item={product} check={true} select={true}/>
        ))}
      </div>

      <div className="absolute bottom-0  w-full px-6 py-4 left-0 border-t-2 bg-white">
        <div className="flex justify-between text-xl">
          <p className="font-semibold">Total</p>
          <p className="font-bold text-green-500">${total}</p>
        </div>
        <button
          className={`${cartProducts.length === 0 ? 'bg-green-700 disabled:opacity-1 cursor-not-allowed': 'hover:bg-green-600'} flex justify-center items-center bg-green-500 w-full p-1 text-white font-bold text-xl mt-2 rounded-lg `}
          disabled={cartProducts.length ===0}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

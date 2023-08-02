import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { OrderCard } from "./OrderCard";
import { totalPrice } from "../utils/totalPrice";

export const CheckoutSideMenu = () => {
  const { cartProducts, checkoutSideMenu, closeCheckoutMenu } =
    useContext(ShoppingContext);

  const total = totalPrice(cartProducts);

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

      <div className="overflow-auto mb-10 custom-scrollbar">
      {cartProducts.map((product, index) => (
        <OrderCard key={index} item={product} />
      ))}
      </div>
        

      <div className="absolute bottom-0  w-full px-6 py-4 left-0 border-t-2 bg-white">
        <div className="flex justify-between text-xl">
        <p className="font-semibold">Total</p>
        <p className="font-bold text-green-500">${total}</p>
        </div>
      </div>
    </aside>
  );
};

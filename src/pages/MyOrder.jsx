import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { OrderCard } from "../components/OrderCard";
import { Link } from "react-router-dom";
import { Detail } from "../components/Detail";

export const MyOrder = () => {
  const { order } = useContext(ShoppingContext);

  const lastOrder = order[0];
  const productsList = lastOrder?.products;

  const date = lastOrder?.date.toLocaleString();

  return (
    <>
      <div className="flex justify-between w-[40rem]"> 
        <h3 className="title">My order</h3>
        <Link className="flex text-sm items-center text-green-700 hover:cursor-pointer hover:text-green-900"
          to={'/my-orders'}
        >
        <p className="mr-2 font-medium "> My Orders</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
        </Link>
      </div>

      <Detail date={date} productsList={productsList} order={lastOrder}/>
    </>
  );
};

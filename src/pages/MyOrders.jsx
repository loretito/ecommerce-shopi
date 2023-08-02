import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";
import { OrderCard } from "../components/OrderCard";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  const { order } = useContext(ShoppingContext);

  return (
    <>
      <h3 className="title">My Orders</h3>

      <div className="w-[40rem] ">
        {order.map(orderItem => (
          <div key={orderItem.id} className="p-3 border-2 rounded-lg mb-4">
            <div className="flex py-4 border-b-2">
              <h2 className="text-bold text-gray-600 font-semibold"><span className="font-">Order ID:</span> {orderItem.id}</h2>
            </div>
            <div className=" flex justify-between items-center mt-4 text-gray-500">
              <div>
                <p>Order Placed: {orderItem.date.toLocaleString()}</p>
                <p>Total: ${orderItem.totalPrice}</p>
              </div>
              <Link className="flex items-center font-medium text-green-600 hover:cursor-pointer hover:text-green-900"
              to={`/my-order/${orderItem.id}`}>
                <p className="mr-2">Order detail</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
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
          </div>
        ))}
      </div>
    </>
  );
};

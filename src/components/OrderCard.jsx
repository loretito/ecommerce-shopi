import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export const OrderCard = ({ item, check, select }) => {
  const { addCart, removeCart, removeCartButton } = useContext(ShoppingContext);

  const { title, image, price, quantity } = item;

  const styles =
    "bg-green-500 w-6 h-6 flex justify-center items-center text-sm";

  return (
    <div className={`flex justify-between items-center p-2 bg-slate-50 drop-shadow-sm my-2 rounded-lg ${select ? 'mr-4' : 'mr-0'}`}>
      <div className="flex items-center gap-2  ">
        <figure className="w-14 h-20 bg-white rounded-lg mr-3">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="h-20 flex flex-col justify-between py-1 w-3/5">
          <p className="text-sm font-light line-clamp-2">{title}</p>
          {select && (
            <div className="flex border-2 w-fit rounded-lg select-none">
              <div
                className={`${styles} bg-white hover:cursor-pointer`}
                onClick={() => removeCart(item)}
              >
                -
              </div>
              <div className={`${styles} bg-slate-100`}>{quantity}</div>
              <div
                className={`${styles} bg-white hover:cursor-pointer`}
                onClick={() => addCart(item)}
              >
                +
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`flex flex-col ${
            !check ? "justify-end" : "justify-between"
          } items-end h-20`}
        >
          {check ? (
            <p
              className="text-slate-500 text-sm hover:cursor-pointer select-none hover:text-slate-600"
              onClick={() => removeCartButton(item)}
            >
              Remove
            </p>
          ) : (
            <p className="text-slate-500 text-sm">SubTotal:</p>
          )}

          <p className="text-lg font-semibold text-green-500">
            ${price * quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

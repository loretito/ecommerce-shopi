import React, { useContext, useState } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export const Card = ({ item }) => {
  const { title, category, price, image, rating } = item;

  const { addProduct, openProductDetail, } = useContext(ShoppingContext)

 

  return (
    <div className="bg-gray-50 cursor-pointer w-48 h-[22rem] rounded-lg p-2 relative drop-shadow hover:drop-shadow-lg"
      onClick={() => openProductDetail(item)}
    >
      <figure className="relative mb-2 w-full h-3/5 rounded-lg overflow-hidden bg-white">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="headphones"
        />
      </figure>
      <span className="text-slate-500 text-sm">{category}</span>
      <div className="flex flex-col mt-1">
        <span className="font-semibold text-sm line-clamp-2">{title}</span>
        <div className="absolute bottom-10 flex items-center text-sm">
          <img src="/svg/star.svg" className="w-4" />
          <p className="ml-1">{rating.rate}</p>
          <p className="ml-4 text-slate-500 text-xs">{rating.count} reviews</p>
        </div>
        <span className="text-slate-900 absolute bottom-2 font-smibold">
          ${price}
        </span>
        <div className="bg-green-500 rounded-lg py-1 px-2 absolute bottom-2 right-2 flex items-center hover:bg-green-600 "
          onClick={(event) => addProduct(event, item)}
        >
          <img src="/svg/shopping-cart.svg" className="w-5" />
        </div>
      </div>
    </div>
  );
};

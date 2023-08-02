import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export const ProductDetail = () => {
    const {openAside, closeProductDetail, item} = useContext(ShoppingContext)
  return (
    <aside className={`${!openAside && 'hidden'} w-[360px] flex flex-col fixed right-0 bg-white border-gray-200 border-l-2 h-[calc(100vh-72px)] top-[72px] p-6`}>
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 hover:cursor-pointer"
          onClick = {closeProductDetail}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <figure className="my-3">
        <img src={item.image} alt={item.title}/>
      </figure>
      <p className="flex flex-col">
        <span className="font-medium text-2xl my-2">${item.price}</span>
        <span className="font-medium text-md mb-2">{item.title}</span>
        <span className="font-light text-sm">{item.description}</span>
      </p>
    </aside>
  );
};

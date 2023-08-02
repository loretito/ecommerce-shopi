import React, { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContext";

export const ProductDetail = () => {
    const {openAside, closeProductDetail, item} = useContext(ShoppingContext)
  return (
    <aside className={`${!openAside && 'hidden'} w-[360px] flex flex-col fixed right-0 bg-white border-gray-200 border-l-2 h-[calc(100vh-72px)] top-[72px] py-6 pr-0 pl-6`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-xl text-green-600">Detail</h2>
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
      <div className="overflow-auto custom-scrollbar p-1">
      <figure className="my-3">
        <img src={item.image} alt={item.title}/>
      </figure>
      <p className="flex flex-col">
        <span className="font-semibold text-2xl my-2 text-green-500">${item.price}</span>
        <span className="font-medium text-md mb-2">{item.title}</span>
        <span className="font-light text-sm ">{item.description}</span>
      </p>
      </div>
    </aside>
  );
};

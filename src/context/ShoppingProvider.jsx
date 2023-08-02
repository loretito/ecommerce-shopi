import React, { useState } from "react";
import { ShoppingContext } from "./ShoppingContext";

export const ShoppingProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [openAside, setOpenAside] = useState(false);
  const [item, setItem] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    iamge: '',
    rating: {
      rate: 0,
      count: 0
    }
  });

  const openProductDetail = itemDetail => {
    setItem(itemDetail);
    setOpenAside(true);
  };

  const closeProductDetail = () => {
    setOpenAside(false);
  };

  return (
    <ShoppingContext.Provider
      value={{
        count,
        setCount,
        openAside,
        item,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

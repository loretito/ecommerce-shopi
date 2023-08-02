import React, { useState } from "react";
import { ShoppingContext } from "./ShoppingContext";

export const ShoppingProvider = ({ children }) => {
  //Shopping Cart - Cart quantity
  const [count, setCount] = useState(0);

  //Shopping Cart - Open/close side
  const [openAside, setOpenAside] = useState(false);

  //Shopping Cart - Open/close checkout cart
  const [checkoutSideMenu, setCheckoutSideMenu] = useState(false);

  //Shopping Cart - Show item (product)
  const [item, setItem] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    iamge: "",
    rating: {
      rate: 0,
      count: 0,
    },
    quantity: 0,
  });

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  const openProductDetail = itemDetail => {
    setItem(itemDetail);
    setOpenAside(true);
    setCheckoutSideMenu(false)
  };

  const closeProductDetail = () => {
    setOpenAside(false);
    setCheckoutSideMenu(false);
  };

  const openCheckoutMenu = () => {
    setCheckoutSideMenu(state => !state);
    openAside && setOpenAside(false) 
  };

  const closeCheckoutMenu = () => {
    setCheckoutSideMenu(false);
    setOpenAside(false);
  };

  const addProduct = (event, product) => {
    event.stopPropagation();
    const productExists = cartProducts.some(p => p.id === product.id);

    if (productExists) {
      const cartProduct = cartProducts.find(p => p.id === product.id);

      cartProduct.quantity += 1;
    } else {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    }
    setCount(state => state + 1);
  };

  const addCart = product => {
    const cartProduct = cartProducts.find(p => p.id === product.id);
    cartProduct.quantity += 1;
    setCount(state => state + 1);
  };

  const removeCart = product => {
    const productIndex = cartProducts.findIndex(p => p.id === product.id);
    const productToChange = cartProducts[productIndex];

    if (productToChange.quantity > 1) {
      productToChange.quantity -= 1;
      setCount(state => state - 1);
    } else {
      const newCartProduct = [...cartProducts];
      newCartProduct.splice(productIndex, 1);
      setCount(state => state - 1);
      setCartProducts(newCartProduct);
    }
  };

  const removeCartButton = product => {
    const productIndex = cartProducts.findIndex(p => p.id === product.id);
    const newCartProduct = [...cartProducts];
    newCartProduct.splice(productIndex, 1);
    setCount(state => state - cartProducts[productIndex].quantity);
    setCartProducts(newCartProduct);
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
        setCartProducts,
        cartProducts,
        checkoutSideMenu,
        openCheckoutMenu,
        closeCheckoutMenu,
        addProduct,
        addCart,
        removeCart,
        removeCartButton,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShoppingContext } from "../context/ShoppingContext";

export const Navbar = () => {
  const { count, openCheckoutMenu, isLogged, email } = useContext(ShoppingContext);
  const {pathname} = useLocation()

  let menuLeft = [
    {
      to: "/",
      text: (
        <p className="text-green-500">
          Shop<span className="text-black">pi</span>
        </p>
      ),
      className: "font-bold text-2xl",
    },
    
  ];

  let menuRight = [
    {
      to: "/my-orders",
      text: "My Orders",
      className: `${isLogged ? 'block' : 'hidden'}`,
    },
    {
      to: '/sign-in',
      text: "Sign In",
      className: `bg-green-500 text-white py-1 px-4 rounded-lg font-semibold ${!isLogged ? 'block' : 'hidden'} ${pathname == '/sign-in' ? 'hidden' : 'block'}`,
    },
    {
      to: "/my-account",
      text: "My Account",
      className: `${isLogged ? 'block' : 'hidden'}`,
    },
    {
      text: (
        <img
          alt="checkout-cart"
          src="/svg/shopping-cart-navbar.svg"
          className="w-8"
          onClick={() => {
            openCheckoutMenu();
          }}
        />
      ),
      className: "relative",
      countClass:
        "absolute -right-2 -top-2 w-5 h-5 bg-green-500 flex items-center justify-center rounded-full text-white font-bold p-1 text-sm",
      onClick: "open",
    },
  ];

  const activeClass = "font-bold text-green-600";

  return (
    <nav className="flex justify-between items-center fixed md:w-full w-screen z-20 py-5 px-4 xl:px-96 md:px-16  font-light top-0 bg-white drop-shadow ">
      <ul className="flex items-center gap-3">
        {menuLeft.map(link => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? activeClass : "")}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className={`text-gray-500   ${isLogged ? 'sm:block hidden' : 'hidden'}`}>{email}</li>
        {menuRight.map(link => (
          <li key={link.text} className={link.className}>
            <div
              className={`${
                link?.countClass && count > 0 ? "block" : "hidden"
              } ${link.countClass}`}
            >
              {count}
            </div>
            <NavLink to={link.to}
            className={({ isActive }) => (isActive ? activeClass : "")}
            >{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

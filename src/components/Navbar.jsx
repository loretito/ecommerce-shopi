import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingContext } from "../context/ShoppingContext";

export const Navbar = () => {

  const {count} =useContext(ShoppingContext)

  let menuLeft = [
    {
      to: "/",
      text: "Shopi",
      className: "font-bold text-2xl",
    },
    {
      to: "/clothes",
      text: "Clothes",
      className: "",
    },
    {
      to: "/electronics",
      text: "Electronics",
      className: "",
    },
    {
      to: "/furnitures",
      text: "Furnitures",
      className: "",
    },
    {
      to: "/toys",
      text: "Toys",
      className: "",
    },
    {
      to: "/other",
      text: "Other",
      className: "",
    },
  ];

  let menuRight = [
    {
      to: "",
      text: "loreto@correo.com",
      className: "text-black/60",
    },
    {
      to: "/my-orders",
      text: "My Orders",
      className: "",
    },
    {
      to: "/my-account",
      text: "My Account",
      className: "",
    },
    {
      to: "/sign-in",
      text: "Sign in",
      className: "",
    },
    {
      to: "",
      text: <img src="/svg/shopping-cart-navbar.svg" className="w-8"/>,
      className: "relative",
      countClass: 'absolute -right-2 -top-2 w-5 h-5 bg-green-500 flex items-center justify-center rounded-full text-white font-bold p-1 text-sm'
    },
  ];



  const activeClass = "font-bold";

  return (
    <nav className="flex justify-between items-center fixed w-full z-10 py-5 px-8 font-light top-0 bg-white">
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
        {menuRight.map(link => (
          <li key={link.text} className={link.className}>
            <div className={`${(link?.countClass && count > 0) ? 'block' : 'hidden'} ${link.countClass}`}>{count}</div>
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

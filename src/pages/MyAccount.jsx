import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../context/ShoppingContext";

export const MyAccount = () => {
  const navigate = useNavigate()
  const {email, setIsLogged} = useContext(ShoppingContext)

  const handleClick = ( ) => {
    setIsLogged(false)
    navigate('/sign-in')
  }

  const style = "py-3 border-b-2 hover:cursor-pointer hover:font-semibold"
  return (
    <div>
      <h3 className="title">Profile</h3>
      <div className=" bg-slate-50 shadow  border-2 rounded-lg w-96">
        <div className="flex items-center p-4">
          <img
            className="w-20 mr-6 rounded-full bg-white"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="profile-image"
          />
          <div className="text-gray-600">
            <p className="font-semibold">{email}</p>
          </div>
        </div>
        <div className="pt-4 border-t-2 py-4 mb-5 p-4">
          <h5 className="text-gray-600 ">General</h5>
          <div className="mt-2 ">
            <p className={style}
            onClick={() => navigate('/my-orders')}>My Orders</p>
            <div className={style}><a href="https://github.com/loretito/" target="_blank">Report a bug</a></div>
            <div className={style} onClick={handleClick}>Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

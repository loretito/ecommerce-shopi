import React, { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { ShoppingContext } from "../context/ShoppingContext";

export const SignIn = () => {
  const navigate = useNavigate()
  const { setIsLogged } = useContext(ShoppingContext)
  const initialForm = {
    email: '',
    password: ''
  }

  const { form, handleChange} = useForm(initialForm)

  const handleSubmit = ( event ) => {
    event.preventDefault()
    setIsLogged(true)
    localStorage.setItem('isLogged', JSON.stringify(true))
    localStorage.setItem('mail-shoppi', JSON.stringify(form.email))
    navigate('/')
  }

  return (
    <>
      <h3 className="title">Sign In</h3>

      <div className="p-10 bg-gray-50 rounded-lg shadow-md mt-6">

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="example@mail.com"
            required
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            name ='password'
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-10"
        >
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

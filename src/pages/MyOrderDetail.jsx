import React, { useContext } from 'react'
import { ShoppingContext } from '../context/ShoppingContext'
import { Link, useParams } from 'react-router-dom'
import { Detail } from '../components/Detail'

export const MyOrderDetail = () => {
    const {id} = useParams()
    const {order } =useContext(ShoppingContext)

    const detailOrder = order.filter( orderItem => orderItem.id === id)
    const Order = detailOrder[0]

  return (
    <>
    
    <div className='w-[40rem]'></div>
    <div className="flex justify-between w-[40rem]"> 
        <h3 className="title">Order Detail</h3>
        <Link className="flex text-sm items-center text-green-600 hover:cursor-pointer hover:text-green-900"
          to={'/my-orders'}
        >
        <p className="mr-2 font-medium "> My Orders</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
        </Link>
      </div>

    <Detail date={Order.date.toLocaleString()} order={Order} productsList={Order.products}/>

    </>
  )
}

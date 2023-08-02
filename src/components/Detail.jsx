import React from 'react'
import { OrderCard } from './OrderCard'

export const Detail = ({date, productsList, order}) => {
  return (
    <div className="w-[40rem] border-2 rounded-lg shadow">
        <div className='text-gray-600 my-1 p-4 border-b-2'>
    <p className='font-bold'>Order ID: {order.id}</p>
    <p className="font-semibold text-sm mt-1">  
      Order Placed: {date}
    </p>
        </div>

    <div className="w-full">
      {productsList?.map(product => (
        <div
          key={product.id}
          className="flex border-b-2 rounded-sm justify-center items-center px-4"
        >
          <div className="w-24 h-full mr-3  text-sm text-gray-500">
            {product.quantity} x ${product.price}
          </div>
          <div className="w-5/6">
            <OrderCard item={product} check={false} select={false} />
          </div>
        </div>
      ))}
      <div className="w-full flex justify-between items-center p-4 text text-gray-500 font-semibold">
        <div className="flex">
          <p className="mr-2">Items:</p>
          <p>{order?.totalProducts}</p>
        </div>
        <div className="flex">
          <p className="mr-3"> Total:</p>
          <p className="font-bold text-green-500 text-lg">
            {" "}
            ${order?.totalPrice}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export const CardProduct = ({product,img,price,id}) => {
  return (

        <div className="w-[32rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/producto/${id}`}>
                <img className="p-8 rounded-t-lg w-full h-[30rem] object-contain" src={img} alt="product image" />
            </Link>
            <div className="px-5 pb-5 flex flex-col-reverse justify-evenly">
                <a href="#">
                    <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{product}</h5>
                </a>
                
                <div className="flex items-center justify-evenly mb-10">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <Link to={`/producto/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Más Informacion</Link>
                </div>
            </div>
        </div>

    )

}

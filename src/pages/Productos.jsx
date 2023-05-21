import React from 'react'
import { Navegacion } from '../components/Navegacion/Navegacion'
import {products} from './../data/products.json'
import { CardProduct } from '../components/CardProduct/CardProduct'
export const Productos = () => {

  return (
    <>
        <Navegacion/>
            <div className='flex gap-10 justify-evenly flex-wrap mt-10'>
            {
                products.map(e => (
                    <CardProduct key={e.id} id={e.id} img={e.thumbnail} product={e.title} price={e.price} />
                ))
            }
        </div>  
    </>
  )
}

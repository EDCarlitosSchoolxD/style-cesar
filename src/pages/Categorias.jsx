import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from './../data/products.json'
import { CardProduct } from '../components/CardProduct/CardProduct';
import { Navegacion } from '../components/Navegacion/Navegacion';

export const Categorias = () => {
    const param = useParams();

    const productArr = products.filter(e => e.category == param.categoria);
    console.log(productArr);

  return (
    <>
        <Navegacion/>

        <div className='flex justify-evenly flex-wrap mt-10'>
            {
                productArr.map(e => (
                    <CardProduct key={e.id} id={e.id} img={e.thumbnail} product={e.title} price={e.price} />
                ))
            }
        </div>    
    </>
  )
}

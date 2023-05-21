import React from 'react'
import { useParams } from 'react-router-dom'
import { Navegacion } from '../components/Navegacion/Navegacion';
import {products} from './../data/products.json'
import { CarouselC } from '../components/Carousel/Carousel';
export const Producto = () => {
  const {id} = useParams();
  console.log(id);
  const product = products.filter(e => e.id == id)[0];
  console.log(product);

  return (
        <>
          <Navegacion/>
          <div className='my-10'>
            <h2 className='text-center text-3xl'>{product.title}</h2>
            <hr />
            <p className='text-center text-green-800 font-bold text-2xl'>${product.price}</p>
          </div>

          <CarouselC  size='50rem' sizeMd='80rem' >
              {product.images.map(image => <img key={image} className='md:object-scale-down object-cover h-full' src={image} alt={product.title} />)}
          </CarouselC>
          

          <hr />

          <div className='w-2/3 text-center text-lg mx-auto mt-10 flex flex-col gap-8'>
            <h3 className='text-center text-2xl font-bold'>Datos del producto</h3>
            <p><strong>Categoria: </strong>{product.category}</p>
            <p><strong>Descripcion: </strong>{product.description}</p>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Agregar al carrito</button>
          </div>
        </>
    )
}

import React, { useContext } from 'react'
import CarContext from '../context/car/CarContext'
import { Navegacion } from '../components/Navegacion/Navegacion';

export const Carrito = () => {
    const {products,eliminar} = useContext(CarContext);

    const total = products.reduce((acumulador,product) => acumulador+ product.price,0)
    console.log(total);
  return (
    <>
        <Navegacion />
        <div className='mt-10'>
            <div className='container mt-10 flex flex-col gap-4'>
                {
                    products.map((produc,index) => (
                        <div className='flex justify-between items-center'>
                            <h3>{produc.title}</h3>
                            <p>${produc.price}</p>
                            <button onClick={() => eliminar(index)} className='bg-red-700 p-4 text-white'>Eliminar</button>
                        </div>

                    ))
                }
            </div>


            <p className='text-center mt-10 text-2xl font-bold'>Total: ${total}</p>
        </div>

        
        

    </>
  )
}

import React from "react";
import { Navegacion } from "../components/Navegacion/Navegacion";
import { CarouselC } from "../components/Carousel/Carousel";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <Navegacion />
      <CarouselC size="50rem" sizeMd="80rem" >
        <img className="h-full w-full object-cover"
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="..."
      />
      <img className="h-full object-cover"
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="..."
      />
      <img className="h-full object-cover"
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="..."
      />
      <img className="h-full object-cover"
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="..."
      />
      <img className="h-full object-cover"
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="..."
      />
      </CarouselC>

      <div className="mt-20 w-3/4 mx-auto">
        <p className="text-center text-2xl   font-bold">Comprar</p>
        <p className="text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          porro, natus impedit qui sint laborum facilis at alias cum ipsum dolor
          voluptate maiores quam velit tempore vel, nulla illo. Reprehenderit.
        </p>

        <div className="mt-10 text-center">
          <Link
            to="/productos"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Comprar ahora
          </Link>
        </div>
      </div>
    </>
  );
};

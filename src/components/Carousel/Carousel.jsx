import React from 'react'
import { Carousel } from 'flowbite-react'
export const CarouselC = ({children,size,sizeMd="40rem"}) => {
  console.log(size);
  return (
    
<div className={`h-[50rem]  md:h-[${sizeMd}] `}>
  <Carousel>
    {children}
    
  </Carousel>
</div>

  )
}

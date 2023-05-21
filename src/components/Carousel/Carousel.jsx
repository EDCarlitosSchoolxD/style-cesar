import React from 'react'
import { Carousel } from 'flowbite-react'
export const CarouselC = ({children,size="30rem",sizeMd="40rem"}) => {
  return (
    
<div className={`h-[${size}] md:h-[${sizeMd}] `}>
  <Carousel>
    {children}
    
  </Carousel>
</div>

  )
}

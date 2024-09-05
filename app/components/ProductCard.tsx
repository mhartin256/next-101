import React from 'react'
import Image from 'next/image'

type props = {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({image, title, description}: props) => {
  return (
    <div className='Flex Flex-col content-center bg-white'>
      <Image 
      src={image} 
      alt={''}
      width={250}
      height={250}
      className='object-cover rounded-md bg-white'
      />
      <h1 className='text-ellipsis overflow-hidden whitespace-nowrap w-[250px] font-semibold'>{title}</h1>
      <p className='text-ellipsis overflow-hidden whitespace-nowrap w-[250px]'>{description}</p>
      
    </div>
  )
}

export default ProductCard

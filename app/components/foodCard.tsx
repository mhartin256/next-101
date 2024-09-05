import { FOOD_OPTIONS, FOOD_URL } from '@/constants';
import React from 'react'
import Image from 'next/image';



type props = {
  image: string;
  title: string;
  overview: string;

}

const FoodCard =  ({image, title, overview}:props) => {

  return (
    <div className='flex flex-col items-center my-4'>
      <Image 
      src={"https://image.tmdb.org/t/p/w500/"+ image} 
      alt={''}
      width = {250}
      height={250}
      className='object-contain rounded-lg'
      />
      <h1 className='text-lg font-semibold text-ellipsis overflow-hidden w-[150px] whitespace-nowrap'>{title}</h1>
      <p className='text-ellipsis overflow-hidden w-[150px] whitespace-nowrap'>{overview}</p>
    </div>
  )
}

export default FoodCard;

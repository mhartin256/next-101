import { FOOD_OPTIONS, FOOD_URL, MOVIE_OPTIONS, MOVIE_URL } from '@/constants'
import React from 'react'
import FoodCard from '../components/foodCard';

const Food = async () => {

    const data = await fetch(MOVIE_URL, MOVIE_OPTIONS)
                .then((res) => res.json())
                .then((res) => res.results);

            console.log(data);


  return (
    <div className='grid grid-cols-4 gap-4'>
        { data && data.map((movie:any) => {
            return (
                <FoodCard 
                key={movie.id}
                image={movie.backdrop_path} 
                title={movie.title} 
                overview={movie.overview}/>
            );
        })
        
        }
        

    </div>
  );
};

export default Food;



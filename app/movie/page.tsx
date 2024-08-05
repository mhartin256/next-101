import { MOVIE_OPTIONS, MOVIE_URL } from '@/constants';
import MovieCard from "../components/MovieCard";
import React from 'react'

// function Card() {
  
//     return(
  
    //   <div className="grid bg-gray-200 rounded-lg shadow-md w-[350px] place-items-center">
      
      
    //   <div className="h-48 bg-gray-300 animate-pulse w-[300px] mt-5">
    //     IMAGE
    //   </div>
  
    //   <div className="p-4">
     
    //     <div className="h-4 bg-gray-300 rounded-full  w-[300px]"></div>
    //     <div className="h-2 bg-gray-300 rounded-full  mt-2 w-[300px]"></div>
  
    //     DESCRIPTION
    //     <div className="h-8 bg-gray-300 rounded-full  mt-4 w-[300px]"></div>
    //     <div className="h-2 bg-gray-300 rounded-full  mt-2 w-[300px]"></div>
  
  
    //   </div>
    // </div>

//     );
//   }

// export default Card;





const Movie = async () => {
  const data = await fetch(MOVIE_URL, MOVIE_OPTIONS)
          .then((res) => res.json())
          .then((res) => res.results);

    console.log(data)

  
    return (
      <div className="grid grid-cols-4 gap-4">
        {data && data.map(function(movie:any){
          return (
            <MovieCard
              image={movie.backdrop_path}
              title={movie.title}
              description={movie.release_date}
            />
          );
        })}
      </div>
    );
};

export default Movie;





























 
  
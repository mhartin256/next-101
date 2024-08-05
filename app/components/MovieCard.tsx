
type movieProps = {
    image: string;
    title: string;
    description: string;
};

const MovieCard = ({image, title, description}: movieProps) =>{
    return(

        <div className="grid bg-gray-200 rounded-lg shadow-md w-[350px] place-items-center mt-2">
      
      
        <img className="h-48 bg-gray-300 w-[300px] object-cover rounded-lg mt-5"
         src={"https://image.tmdb.org/t/p/w500/"+ image}
         alt={""}
        />
    
        <h1 className='font-bold pt-2'>
          {title}
        </h1>
            
          
          <div className="h-2 bg-gray-300 rounded-full  mt-2 w-[300px]"></div>
    
          {"Release date: " + description}
          
          <div className="h-2 bg-gray-300 rounded-full  mt-2 w-[300px]"></div>
    
        
      </div>

    );
}

export default MovieCard;
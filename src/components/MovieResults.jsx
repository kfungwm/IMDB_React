import React, {useState, useEffect} from "react";
import axios from "axios";


function MovieResult(props) {

  const [movies, setMovies] = useState();
  const [newError, setNewError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const APIKEY = "c964d7dd";
  const url = 'http://www.omdbapi.com/?apikey=' + APIKEY + '&s=' + props.movieValue; 

  const url1Movie = 'http://www.omdbapi.com/?apikey=' + APIKEY + '&t=' + props.movieValue; 

  const api_call = async () => {
    const request = axios.get(url);
    const response = await request; 
    const check = response.data.Response;
    console.log(response.data);
    if(check === "False") {
       
       setNewError(response.data.Error);
        setIsLoading(true);
    } else {
        setMovies(response.data.Search);
        setIsLoading(false);
    }
  }

  console.log("line27 " + newError);

  useEffect(() => {
    if(props.movieValue === undefined) {
        console.log("loading");
      return <p>Loading</p>;   
      
     } else if(newError === "False") {
        console.log("null");
         return setIsLoading(true);
        
     } else {
         api_call();
         console.log(url);
     }
 }, [props]); 
  


  return (
      <div>

        {isLoading ? <div>{newError}</div> :  
        <div> 
            {movies.map((movie, index) => (
                <div> <p>{movie.imdbID}</p>
                <p>{movie.Title} </p>
                <img src={movie.Poster}></img>
                <p>{movie.Year}</p></div>
            
            ))}
        </div>}
 
     
    </div>
  );
}

export default MovieResult;

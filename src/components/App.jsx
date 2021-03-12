import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchArea from "./SearchArea";
import MovieResult from "./MovieResults";

function App() {

  const [movieValue, setMovieValue] = useState();
  const [targetMovie, setTargetMovie] = useState();
  
  function movieName(input) {
    console.log("Child 1 New input " + input);
    setMovieValue(input);
    
  }

  console.log("Parent " + movieValue);

  function movieID(event) {
    setTargetMovie(event);

  }
  
  console.log("parents ID " + targetMovie);

  return (
    <div className="App">
      <SearchArea addClick={movieName}/>
      <MovieResult movieValue={movieValue} targetID={movieID} />
    </div>
  );
}

export default App;

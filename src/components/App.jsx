import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchArea from "./SearchArea";
import MovieResult from "./MovieResults";

function App() {

  const [movieValue, setMovieValue] = useState();
  
  function movieName(input) {
    console.log("Child 1 New input " + input);
    setMovieValue(input);
    
  }

  console.log("Parent " + movieValue);


  
  

  return (
    <div className="App">
      <SearchArea addClick={movieName}/>
      <MovieResult movieValue={movieValue} />
    </div>
  );
}

export default App;

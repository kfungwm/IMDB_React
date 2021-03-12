import React, {useState} from "react";
import axios from "axios";

function SearchArea() {

    const [input, SetInput] = useState();

    const APIkey = "c964d7dd";

    function handleChange(event) {
        const value = event.target.value;
        console.log(event.target.value);
        SetInput(value);

    }

    function handleClick(event) {
        console.log("click" + event.target.value);

    }

    console.log(input);

    return (
        <div>
            <h1>Search Your Movie</h1>
            <input type="text" placeholder="Input Your Movie" value={input} onChange={handleChange}></input>
            <button onClick={handleClick}>Search</button>

        </div>
    )
}

export default SearchArea;
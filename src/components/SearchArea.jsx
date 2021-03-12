import React, {useState} from "react";


function SearchArea(props) {

    const [input, setInput] = useState();
    //const [headingText, setHeadingText] = useState();

    function handleChange(event) {
        const value = event.target.value;
        
        setInput(value);
    }

    function handleClick(event) {
        props.addClick(input)
     //   setHeadingText(input); 
        event.preventDefault();
        setInput("")

    }

    

    return (
        <div>
            <h1>Search Your Movie</h1>
            <input type="text" placeholder="Input Your Movie" value={input} onChange={handleChange}></input>
            <button onClick={handleClick}>Search</button>

        </div>
    )
}

export default SearchArea;
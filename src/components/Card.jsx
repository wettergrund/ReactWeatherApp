import React, { useState } from 'react'
import Picture from './card-items/Picture'
import SearchArea from './card-items/SearchArea'
import InfoArea from './card-items/InfoArea'
import InputField from './card-items/searcharea-items/InputField';

const UserContext = React.createContext();


let selectedUnit = "metric";
let degChar = "C";
let currentLat;
let currentLong;



const Card = (props) => {



    const [cityName, setCityName] = useState("Stockholm");

    const [input, setInput] = useState("");

    const handleSearch = () => {
      setCityName(input);

      console.log(input);
    };

    const handleInput = (event) => {
      setInput(event.target.value);

      
    };

  

  return (
    <>
    
        <Picture City={cityName}/>
        {/* <SearchArea/> */}
        <InputField onPress={handleSearch} onSearch={handleInput}/>  
        {/* <h1>{cityName}</h1> */}
        <InfoArea City={cityName} />

    
    </>
    
  )
}

export default Card
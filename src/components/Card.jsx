import React, { useState } from 'react'
import Picture from './card-items/Picture'
import SearchArea from './card-items/SearchArea'
import InfoArea from './card-items/InfoArea'
import InputField from './card-items/searcharea-items/InputField';
import styled from 'styled-components'


const UserContext = React.createContext();

const Container = styled.div`

  display: relative;
	background: rgba(255, 255, 255, 0.2);
	backdrop-filter: blur(5px);
	margin: 0rem auto;
	width: var(--std-width);
	min-width: 300px;
	max-width: 400px;
	/* padding-top: rem; */
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 1em;
	overflow: hidden;
	z-index: 1;


`;

const TextArea = styled.div`


    padding: 2rem;
    color: whitesmoke;
  
`;


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
    <Container>
    
        <Picture City={cityName}/>
        {/* <SearchArea/> */}

        <TextArea>

        <InputField onPress={handleSearch} onSearch={handleInput}/>  
        {/* <h1>{cityName}</h1> */}
        <InfoArea City={cityName} />

        </TextArea>

    
    </Container>
    
  )
}

export default Card
import React, { useState } from 'react'
import styled from 'styled-components'

const SearchArea = styled.div`

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: .75rem;


  & > * {
    border: 0;
  height: 3rem;
  border-radius: .5em;
  box-shadow: 0 .5rem 1rem -.5rem rgba(0, 0, 0, 0.1);
  background: white;
  color: black;
  width: 100%;


  }


`;

const InputFields = styled.input`

  grid-column: 1 / span 4;
  padding: 1rem;
  font-size: 1rem; 



`;

const Btn = styled.button`

  display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: pointer;
  grid-column: 1 / span 4;

`;







const InputField = ({ onSearch, onPress }) => {
  return (
    <SearchArea>

      
      <InputFields type="text" name="city-input" id="city-input" placeholder="Ange en stad..." onChange={onSearch}></InputFields>
      <Btn className="buttons" id="city-confirm" tabindex="0" onClick={onPress}>
      <i className="fa-solid fa-magnifying-glass"></i>
      </Btn>


    </SearchArea>
    // {/* <div class="buttons" id="location" title="Test" tabindex="0">
    //     <i class="fa-solid fa-location-arrow"></i>
    // </div> */}
    
  )
}

export default InputField
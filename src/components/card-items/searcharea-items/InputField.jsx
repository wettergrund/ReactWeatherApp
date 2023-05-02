import React, { useState } from 'react'
import styled from 'styled-components'


const Btn = styled.button`

  border: 1px solid red;

`;







const InputField = ({ onSearch, onPress }) => {
  return (
    <>
    
    <input type="text" name="city-input" id="city-input" placeholder="Ange en stad..." onChange={onSearch}></input>
    <Btn className="buttons" id="city-confirm" tabindex="0" onClick={onPress}>
    <i className="fa-solid fa-magnifying-glass"></i>
    </Btn>
    {/* <div class="buttons" id="location" title="Test" tabindex="0">
        <i class="fa-solid fa-location-arrow"></i>
    </div> */}
    </>
  )
}

export default InputField
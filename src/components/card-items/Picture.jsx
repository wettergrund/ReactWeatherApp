import React from 'react'
import styled from 'styled-components'
// import pic from "https://source.unsplash.com/random/100/?Stockholm"

// const Photo = styled.section`

// background-size: cover;
// background-position: center;

// /* width: var(--std-width); */
// width: 100%;
// height: 150px;
// /* background: url(${pic}); */


// /* $(props) => */

// `;

const Picture = (props) => {
  return (
    <>
      <img src={"https://source.unsplash.com/random/100/?" + props.City + '?city'} alt="" />
      {/* Hej */}
      {/* <Photo></Photo> */}
    </>

  )
}

export default Picture
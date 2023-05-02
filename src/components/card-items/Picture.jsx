import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

var myUrl

const Container = styled.div`
	background-size: cover;
	background-position: center;

	width: 100%;
	height: 150px;
`;


const Picture = (props) => {

  const [url, setUrl] = useState('');

  useEffect(()=>{   

    
    const newUrl = `https://source.unsplash.com/random/100/?${ props.City }?city`
    myUrl=newUrl;

    setUrl(newUrl)


  
  },[props.City]);




  return (
    <Container style={{backgroundImage: `url(${url})`}} />
 
  )
}

export default Picture
import React, { useEffect, useState } from 'react'
import City from './infoarea-items/City'
import WeatherText from './infoarea-items/WeatherText'
import Temp from './infoarea-items/Temp.jsx'
import Wind from './infoarea-items/Wind'
import styled from 'styled-components'






const InfoArea = (props) => {

  const [temp, setTemp] = useState('');
  const [description, setDescription] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [windDeg, setWindDeg] = useState('');


  // const [getWeather, setWeather] = useState({
  //   temp: '',
  //   description: '',
  //   windSd: '',
  //   windDg: '',

  // })

  useEffect(()=>{
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ props.City }&units=metric&appid=20c1b5b4154b642825b84b32a726d7aa`)
    .then((res) => res.json())
    .then((json) => {
    
      
      
      
      const weather = {
        
        
        code: json.cod,
        description: json.weather[0].description,
        temp: json.main.temp,
        // flooredTemp: Math.round(temp),
        
        
        windSpeed: json.wind.speed,
        windDeg: json.wind.deg,
        

    };
    
    setTemp(weather.temp);
    setDescription(weather.description);
    setWindSpeed(weather.windSpeed);
    setWindDeg(weather.windDeg);
    
  });

  {console.log(props)}

},[props.City])
  
  

//  const [temp, setTemp] = useState('');

//  setTemp(json.main.temp)



  return (
  
  
    <>
  
    <City City={props.City} />
    <WeatherText Description={description}/>
    <Temp Deg={Math.round(temp)}/>
    <Wind WindSpeed={windSpeed} WindDir={windDeg}></Wind>
  
    </>
   
  )









}

export default InfoArea
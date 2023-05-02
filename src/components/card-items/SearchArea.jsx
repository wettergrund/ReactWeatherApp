import React from 'react'
import InputField from './searcharea-items/InputField'
import GeoButton from './searcharea-items/GeoButton'
import SearchButton from './searcharea-items/SearchButton'

const SearchArea = (props) => {

    var city = "Malmö";

    function CallBack (childData){
        return (
            childData
        )
    }

  return (
    <>
    <InputField/>
    <SearchButton id="city-confirm" />
    <GeoButton />

    </>

    // <div>
    //     {props.handleCallback(city)}
    // </div>

  )
}

export default SearchArea
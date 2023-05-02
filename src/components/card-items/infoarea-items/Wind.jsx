import React from 'react'

const Wind = (props) => {
  return (
    <div>
      <div>{props.WindSpeed} speed</div>
      <div>{props.WindDir} deg</div>


    </div>
  )
}

export default Wind
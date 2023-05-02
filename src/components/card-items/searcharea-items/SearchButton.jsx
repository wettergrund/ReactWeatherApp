import React from 'react'

const SearchButton = ({id}) => {
  return (
    <div class="buttons" id={id} tabindex="0">
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default SearchButton
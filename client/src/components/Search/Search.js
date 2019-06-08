import React from 'react';

const Search = props => {

  const fetchImages = (input) => {
    props.fetchImage(input);
  }

  return(
    <div>
      <input onChange={(e) => fetchImages(e.target.value)} type='text'></input>
    </div>
  )
}

export default Search;

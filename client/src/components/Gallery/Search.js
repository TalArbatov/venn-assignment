import React from 'react';

const Search = props => {

  const onSearch = (input) => {
    props.onSearch(input);
  }

  return(
    <div>
      <input onChange={(e) => onSearch(e.target.value)} type='text'></input>
    </div>
  )
}

export default Search;

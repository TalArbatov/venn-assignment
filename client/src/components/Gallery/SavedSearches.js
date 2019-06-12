import React from "react";

const SavedSearches = props => {
  return (
    <ul>
      {props.savedSearches.map((savedSearch, index) => {
        return (
          <li onClick={() => props.showSearch(index)} key={index}>
            Save {index}
          </li>
        );
      })}
    </ul>
  );
};

export default SavedSearches;

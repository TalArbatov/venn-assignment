import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionCreators";

const Grid = styled.div`
  line-height: 0;
   
   -webkit-column-count: 4;
   -webkit-column-gap:   20px;
   -moz-column-count:    4;
   -moz-column-gap:      20px;
   column-count:         4;
   column-gap:           20px;  
 
   @media (max-width: 1200px) {
 
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  
}
@media (max-width: 1000px) {

  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  
}
@media (max-width: 800px) {
  
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  
}
@media (max-width: 400px) {
  
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  
}
`;
const ImageWrapper = styled.div`

img {
  width: 100% !important;
  height: auto !important;
  margin:10px;
}
 
`
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
const Gallery = props => {
  return (
    <Grid>
      {props.images.map((photo, index) => {
//        console.log(photo);
        const src = `http://farm${photo.farm}.staticFlickr.com/${
          photo.server
        }/${photo.id}_${photo.secret}.jpg`;
        return <ImageWrapper key={index}><img  src={src} /></ImageWrapper>;
      })}
    </Grid>
  );
};

export default Gallery;
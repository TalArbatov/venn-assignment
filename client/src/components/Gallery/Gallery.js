import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionCreators";

const Grid = styled.div`
  line-height: 0;
   
   -webkit-column-count: 3;
   -webkit-column-gap:   0px;
   -moz-column-count:    3;
   -moz-column-gap:      0px;
   column-count:         3;
   column-gap:           0px;  
 
`;
const ImageWrapper = styled.div`

img {
  width: 100% !important;
  height: auto !important;

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
      {props.galleryReducer.images.map((photo, index) => {
        console.log(photo);
        const src = `http://farm${photo.farm}.staticFlickr.com/${
          photo.server
        }/${photo.id}_${photo.secret}.jpg`;
        return <ImageWrapper><img key={index} src={src} /></ImageWrapper>;
      })}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    galleryReducer: state.galleryReducer
  };
};

export default connect(mapStateToProps)(Gallery);

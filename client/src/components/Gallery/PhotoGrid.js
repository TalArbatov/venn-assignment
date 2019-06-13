import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import config from "../../../../config";

const Grid = styled.div`
  display:grid;
  line-height: 0;   
  column-count: 4;
  column-gap: 20px; 
  grid-auto-flow:row !important;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items:center;
  overflow:hidden;
  @media (max-width: 1200px) {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;  
}
  @media (max-width: 1000px) 
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
    margin: 10px;
  }
`;

const PhotoGrid = props => {
  return (
    <Grid>
      {props.images.map((photo, index) => {
        const src = config.getImageUrl(photo);
        return (
          <ImageWrapper key={index}>
            <a href={src}>
            <img src={src} />
            </a>
          </ImageWrapper>
        );
      })}
    </Grid>
  );
};

PhotoGrid.propTypes = {
  images: PropTypes.array
};

export default PhotoGrid;

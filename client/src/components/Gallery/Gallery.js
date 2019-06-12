import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionCreators";
import Search from "./Search";
import PhotoGrid from "./PhotoGrid";

class Gallery extends React.Component {

  state = {
    searchTerm: '',
    page: 1
  }

 componentDidMount() {
   this.props.fetchImages(this.state.page, this.state.searchTerm, true);
   window.addEventListener('scroll', this.handleScroll);

 }
componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = e => {
  //console.log('window.innerHeight: ' + window.innerHeight);
  //console.log('document.documentElement.scrollTop: ' + document.documentElement.scrollTop);

  const bottom2 = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  if(bottom2)   console.log('bottom2')
  if (
    window.innerHeight + document.documentElement.scrollTop ===
    document.documentElement.offsetHeight
  ) {
    console.log("bottom");
    const currentPage = this.state.page
    this.setState({page: currentPage + 1},
      () => {
        this.props.fetchImages(this.state.page, this.state.searchTerm, true);

      })
  }
}


  onSearch = searchTerm => {
    this.setState({searchTerm},
      () => {
        this.props.fetchImages(this.state.page, this.state.searchTerm, false);

      })
  }

  showSearch = (index) => {
    console.log(index);
    this.props.showSearch(index)
  }


  saveSearch = () => {
    const toSave = this.props.galleryReducer.images;
    this.props.saveSearch(toSave);
  }
  render() {
  return (
    <div>
          <Search onSearch={(searchTerm) => this.onSearch(searchTerm)}/>    
          <button onClick={() => this.saveSearch()}>Save Search</button>
          <ul>
          {this.props.galleryReducer.savedSearches.map((savedSearch, index) => {
            return <li onClick={(() => this.showSearch(index))} key={index}>Save {index}</li>
          })}
          </ul>
      <PhotoGrid images={this.props.galleryReducer.images} />
      <p>test</p>
      </div>
  );
  }
};


const mapStateToProps = state => {
  return {
    galleryReducer: state.galleryReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchImages : (page, searchTerm, isNewPage) => dispatch(ACTIONS.fetchImages(page, searchTerm, isNewPage)),
    saveSearch: (searchValues) => dispatch(ACTIONS.saveSearch(searchValues)),
    showSearch :index => dispatch(ACTIONS.showSearch(index)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
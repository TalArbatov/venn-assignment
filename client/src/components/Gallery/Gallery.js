import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as ACTIONS from "../../actions/actionCreators";
import Search from "./Search";
import PhotoGrid from "./PhotoGrid";
import SavedSearches from "./SavedSearches";

class Gallery extends React.Component {
  state = {
    searchTerm: "",
    page: 1
  };

  componentDidMount() {
    this.props.fetchImages(this.state.page, this.state.searchTerm, true);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log("user reached bottom, fetching new images");
      const currentPage = this.state.page;
      this.setState({ page: currentPage + 1 }, () => {
        this.props.fetchImages(this.state.page, this.state.searchTerm, true);
      });
    }
  };

  onSearchKeyUp = searchTerm => {
    this.setState({ searchTerm }, () => {
      this.props.fetchImages(this.state.page, this.state.searchTerm, false);
    });
  };

  showSearch = index => {
    console.log(index);
    this.props.showSearch(index);
  };

  saveSearch = () => {
    const values = this.props.galleryReducer.images;
    const keyword = this.state.searchTerm;
    this.props.saveSearch(keyword, values);
  };

  render() {
    return (
      <div>
        <Search onSearchKeyUp={searchTerm => this.onSearch(searchTerm)} />
        <button onClick={() => this.saveSearch()}>Save Search</button>
        <SavedSearches savedSearches={this.props.galleryReducer.savedSearches} showSearch={(index) => this.showSearch(index)}/>
        <PhotoGrid images={this.props.galleryReducer.images} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    galleryReducer: state.galleryReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchImages: (page, searchTerm, isNewPage) => dispatch(ACTIONS.fetchImages(page, searchTerm, isNewPage)),
    saveSearch: (keyword, values) => dispatch(ACTIONS.saveSearch(keyword, values)),
    showSearch: index => dispatch(ACTIONS.showSearch(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

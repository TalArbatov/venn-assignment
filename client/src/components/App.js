import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Search from './Search/Search'
import {connect} from 'react-redux'
import * as ACTIONS from '../actions/actionCreators';
class App extends Component {
  state = {
    photos: []
  }
  componentDidMount() {
    // axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
    // .then(res => {
    //   this.setState({photos: res.data.photos.photo})
    // })    
    this.props.fetchImages('');
  }

  render() {

    return(
      <div>
      <Navbar></Navbar>
       <p>App</p>
       <Search fetchImage={(searchTerm) => this.props.fetchImages(searchTerm)}/>

       <Gallery images={this.props.galleryReducer.images}/>
       {/* {this.state.photos.map((photo, index) => {
        const src = `http://farm${photo.farm}.staticFlickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return <img src={src} alt='test'></img>
       })} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    galleryReducer: state.galleryReducer
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchImages : (searchTerm) => dispatch(ACTIONS.fetchImages(searchTerm))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
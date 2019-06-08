import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
class App extends Component {
  state = {
    photos: []
  }
  componentDidMount() {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
    .then(res => {
      // console.log(res.data);
      // res.data.photos.photo.map(photo => {
      //   console.log(photo)
      // })
      this.setState({photos: res.data.photos.photo})
    })    
  }

  render() {

    return(
      <div>
      <Navbar></Navbar>
       <p>App</p>
       {this.state.photos.map((photo, index) => {
        const src = `http://farm${photo.farm}.staticFlickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return <img src={src} alt='test'></img>
       })}
      </div>
    )
  }
}

export default App;
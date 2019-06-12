import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Gallery from './Gallery/Gallery';
import Search from './Gallery/Search'
import {connect} from 'react-redux'
import * as ACTIONS from '../actions/actionCreators';

class App extends Component {
 

  render() {

    return(
      <div>
      <Navbar></Navbar>
       <p>App</p>
       

       <Gallery/>
     
      </div>
    )
  }
}
export default App;
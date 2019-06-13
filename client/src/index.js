import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import configStore from './configStore';
import {Provider} from 'react-redux'
const store = configStore();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    max-width:100vw;
    font-family:Gisha;

  }
 `;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

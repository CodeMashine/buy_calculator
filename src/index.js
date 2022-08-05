import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./app/store" ;
import {Provider} from "react-redux" ;
// import "./features/spendingTable/head/categoryFilter/categoryFilter.css" ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
      <App />
  </Provider>
);

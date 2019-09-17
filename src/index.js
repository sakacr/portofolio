import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; //import browser router dari react-router-dom
import 'react-mdl/extra/material.css'; //import material.css dari react-mdl
import 'react-mdl/extra/material.js'; //import material.js dari react-mdl

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>//browser router digunakan ketika web diakses 
  , document.getElementById('root'));

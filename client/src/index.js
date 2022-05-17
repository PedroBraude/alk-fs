import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';


axios.default.baseURL = process.env.REACT_APP_API || 'http://localhost:3000';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);





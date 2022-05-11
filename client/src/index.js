import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.default.baseIRL = process.env.REACT_APP_API || 'http://localhost:3000';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);




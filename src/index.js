import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts.css';

import { MyProvider } from './context/MyProvider';

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

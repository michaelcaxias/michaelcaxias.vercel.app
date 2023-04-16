import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import App from './App';
import './fonts.css';

import { MyProvider } from './context/MyProvider';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

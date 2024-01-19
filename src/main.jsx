import React from 'react';
import ReactDOM from 'react-dom/client';

import { PlayersApp } from './PlayersApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <PlayersApp />
    </BrowserRouter>
  </React.StrictMode>,
)

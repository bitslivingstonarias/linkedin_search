import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RouterPage } from './LinkedinApp/router/RouterPage';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
      <React.StrictMode>
        <RouterPage />
      </React.StrictMode>
    </BrowserRouter>
)

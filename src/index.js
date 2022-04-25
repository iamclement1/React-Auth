import React from 'react';
import { createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://itusell.herokuapp.com/api/users/'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App />
)

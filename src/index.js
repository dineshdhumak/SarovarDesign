import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import Menu from './Components/Menu.js';
import T1 from './Components/T1.js';
import Linnearstepper from './Components/Linnearstepper.js';
ReactDOM.render(
   <BrowserRouter>          
    <App />    
        <Menu />  
        <T1 />    
        <Linnearstepper />   
          </BrowserRouter>, 
  document.getElementById('root')
);
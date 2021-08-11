import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import Menu from './Components/Menu.js';
import T1 from './Components/T1.js';
import Linnearstepper from './Components/Linnearstepper.js';
import Simtranslist from './Components/Simtranslist.js';  
import Linnearbuffer from './Components/Linnearbuffer.js';
import Formdialog from './Components/Formdialog.js'
ReactDOM.render(
   <BrowserRouter>          
    <App />    
        <Menu />  
        <T1 />    
        <Linnearstepper />   
        <Simtranslist />
        <Linnearbuffer />
        <Formdialog />
          </BrowserRouter>, 
  document.getElementById('root')
);
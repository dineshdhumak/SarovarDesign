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
import Simptable from './Components/Simptable.js'
import Middivider from './Components/Middivider.js'
import SimpleTooltips from './Components/Simptooltips.js';
import S1 from './Components/S1.js';
ReactDOM.render(
   <BrowserRouter>          
    <App />    
        <Menu />  
        <T1 />    
        <Linnearstepper />   
        <Simtranslist />
        <Linnearbuffer />
        <Formdialog />
        <Simptable />
        <Middivider />
        <SimpleTooltips />
        <S1 />
          </BrowserRouter>, 
  document.getElementById('root')
);
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/Toolbar'
import {Link, Router} from "react-router-dom";
import logo from './../Assets/logo.svg';
import { Tab } from '@material-ui/core';
import { SpaceBar } from '@material-ui/icons';


export default function ButtonAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
            <Link to={process.env.PUBLIC_URL + '/home'}>Home
                            </Link>  
                            <Tab />
            <Link to={process.env.PUBLIC_URL + '/Gallery'}>Gallery
                            </Link>
                            <Tab />
            <Link to={process.env.PUBLIC_URL + '/Page3'}>Page3
                            </Link>
          
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

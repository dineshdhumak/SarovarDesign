/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Services() {
  const defaultProps = {
    options: services,
    getOptionLabel: (option) => option.title,
  };

  

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="debug"
        debug
        renderInput={(params) => <TextField {...params} label="Services" margin="normal" />}
      />         
    </div>
  );
}


const services = [
  { title: 'Events' },
  { title: 'Business' },
  { title: 'Pilgrimage' },
  { title: 'Holidays ' },  
];

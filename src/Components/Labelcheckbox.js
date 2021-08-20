import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Marksheet</FormLabel>
      <FormGroup aria-label="position" row>
                <FormControlLabel
          value="SSC"
          control={<Checkbox color="primary" />}
          label="SSC"
          labelPlacement="start"
        />
 <FormControlLabel
          value="HSC"
          control={<Checkbox color="primary" />}
          label="HSC"
          labelPlacement="start"
        />
         <FormControlLabel
          value="Graduate"
          control={<Checkbox color="primary" />}
          label="Graduate"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}       
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hotel1 from '../Assets/Images/Hotel1.jpg';
import BasicTextFields from './Textfield1';
import BasicTextFields2 from './Textfield2';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h3>Check out</h3></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <div className="row">
                 <div className="Hotel1">
                 <img src={Hotel1} width="350" height="170" />
                 </div>
              </div>
         </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><BasicTextFields /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><BasicTextFields2 /></Paper>
        </Grid>
      </Grid>
     <br />
    </div>
    
  );
  
}
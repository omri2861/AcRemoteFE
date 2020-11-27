import React from 'react';
import { useState } from 'react';

import Paper from '@material-ui/core/Paper';

import Controls from './Controls/Conrtols';
import Screen from './Screen';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // NOTE: This call raises a warning for some reason. Find out why and fix it
    padding: theme.spacing(2),
  },
}));

function Controller(props) {
  const classes = useStyles();

  const [temprature, setTemprature] = useState(21);

  return (
    <Paper elevation={10} className={classes.root}>
      <Screen temprature={temprature}/>
      <Controls setState={setTemprature}/>
    </Paper>
  );
}

export default Controller;

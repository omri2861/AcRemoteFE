import React from 'react';

import {Card, makeStyles, Divider} from '@material-ui/core';

import modes from "../acModes";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#616b3c',
    // TODO: Find a way to move margin out from the screen, since the screen shouldn't position itself
    marginBottom: theme.spacing(2),
    color: 'black',
  },
  divider: {
    height: '1px',
    backgroundColor: 'black',
  },
}));

function Screen(props) {
  const classes = useStyles();

  function getTime() {
    let currentTime = new Date();
    return currentTime.getHours() + ":" + currentTime.getMinutes();
  }

  return (
    <Card className={classes.root} variant="outlined">
      {modes[props.acState.mode]}
      <Divider className={classes.divider} />
      <p style={{textAlign: 'right'}}>{getTime()}</p>
      <Divider className={classes.divider} />
      <p>{props.acState.temprature}&#xb0;</p>
    </Card>
  );
}

export default Screen;

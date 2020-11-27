import React from 'react';

import {Card, makeStyles, Divider} from '@material-ui/core';

import AcUnitIcon from '@material-ui/icons/AcUnit';

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

  return (
    <Card className={classes.root} variant="outlined">
      <AcUnitIcon />
      <Divider className={classes.divider} />
      <p style={{textAlign: 'right'}}>9:17</p>
      <Divider className={classes.divider} />
      <p>{props.temprature}&#xb0;</p>
    </Card>
  );
}

export default Screen;

import React from 'react';

import {Card, makeStyles, Divider} from '@material-ui/core';

import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    // backgroundColor: "#8BAC0F",
    backgroundColor: '#616b3c',
  },
  divider: {
    height: '1px',
    backgroundColor: 'black',
  },
  screenText: {
    color: 'black',
  },
}));

function Screen() {
  const classes = useStyles();
  // TODO: Find out how to do it properly
  const screenClasses = classes.screenText + ' ' + classes.root;

  return (
    <Card className={screenClasses} variant="outlined">
      <AcUnitIcon />
      <Divider className={classes.divider} />
      <p style={{textAlign: 'right'}}>9:17</p>
      <Divider className={classes.divider} />
      <p>21&#xb0;</p>
    </Card>
  );
}

export default Screen;

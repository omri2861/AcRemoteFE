import React from 'react';

import {Card, makeStyles, Divider} from '@material-ui/core';

import modes from '../acModes';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#616b3c',
    // TODO: Find a way to move margin out from the screen, since the screen shouldn't position itself
    marginBottom: theme.spacing(2),
    color: 'black',
    fontSize: '3rem',
    padding: '10px',
    fontFamily: 'Digital7',
  },
  divider: {
    height: '1px',
    backgroundColor: 'black',
  },
  degrees: {
    margin: '20px 10px',
  },
}));

function Screen(props) {
  const classes = useStyles();

  function getTime() {
    let now = new Date();
    return now.getHours() + ':' + now.getMinutes();
  }

  const [currentTime, setCurrentTime] = React.useState(getTime());

  React.useEffect(() => {
    // No need to refresh more than 1 minute
    const interval = setInterval(() => setCurrentTime(getTime()), 60 * 1000);

    return () => clearInterval(interval);
  });

  return (
    <Card className={classes.root} variant="outlined">
      {modes[props.acState.mode]}
      <Divider className={classes.divider} />
      <p style={{textAlign: 'right'}}>{currentTime}</p>
      <Divider className={classes.divider} />
      <p className={classes.degrees}>{props.acState.temprature}&#xb0;</p>
    </Card>
  );
}

export default Screen;

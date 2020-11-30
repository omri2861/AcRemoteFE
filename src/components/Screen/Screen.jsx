import React from 'react';

import {Box, Card, makeStyles, Divider, Typography} from '@material-ui/core';

import ModeBar from './ModeBar';

import SignalCellular1BarIcon from '@material-ui/icons/SignalCellular1Bar';
import SignalCellular2BarIcon from '@material-ui/icons/SignalCellular2Bar';
import SignalCellular3BarIcon from '@material-ui/icons/SignalCellular3Bar';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';

const fanSpeeds = [
  <SignalCellular1BarIcon />,
  <SignalCellular2BarIcon />,
  <SignalCellular3BarIcon />,
  <SignalCellular4BarIcon />,
];

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
      <ModeBar mode={props.acState.mode}/>
      <Divider className={classes.divider} />
      <p style={{textAlign: 'right'}}>{currentTime}</p>
      <Divider className={classes.divider} />
      <p className={classes.degrees}>{props.acState.temprature}&#xb0;</p>
      <Divider className={classes.divider} />
      <Box textAlign="right">
        <Typography
          style={{
            visibility: props.acState.fanSpeed === fanSpeeds.length - 1 ? 'visible' : 'hidden',
          }}>
          AUTO
        </Typography>
        {fanSpeeds[props.acState.fanSpeed]}
      </Box>
    </Card>
  );
}

export default Screen;
